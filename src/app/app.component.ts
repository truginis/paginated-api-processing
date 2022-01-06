import { Component } from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paginated-api-processing';
  passengers: Array<any> = [];
  currentPage = 0;

  constructor(private appService:AppService) {
  }

  processData(start = 0, pageLimit = 5) {
    console.log(`Processing page ${this.currentPage} of ${pageLimit}`)
    this.appService.processPaginatedAPI(this.currentPage)
      .subscribe(data => {
          // I am pushing data to an array to just show it in the UI
          // you can do whatever data processing or transformation here.
          this.passengers.push(...data);
          console.log('Got some data. Transforming...')

          // this would be "start" point for getting data
          // you would keep going until there are fewer records than the limit,
          // I am limiting this (pageLimit) so I don't hammer the API for no reason
          this.currentPage++;

          // if limit is not reached go to next page/next batch
          if (this.currentPage < pageLimit) {
            console.log(`Page limit has not been reached. Let's get some more data`)
            this.processData(this.currentPage);
          } else {
            console.log(`Reached the end of the limit. We're done here.`)
          }
      })
  }
}
