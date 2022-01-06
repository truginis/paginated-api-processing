import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  processPaginatedAPI(page: number): Observable<any> {
    const size = 10;
    console.log('Hitting up an API')
    return this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`)
      .pipe(
        map((res: any) => {
          // just getting the data I care about. which is just an array of passengers.
          const data = res.data;
          // filtering out any passengers that do not have a name assigned.
          return data.filter( (passenger: any) => passenger.name !== null)
        }),
      )
  }
}
