import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  passengers = [];

  constructor(private http: HttpClient) {
  }

  processPaginatedAPI(page: number): Observable<any> {
    const size = 10;
    return this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${size}`)
      .pipe(
        map((res: any) => {
          const data = res.data;
          return data.filter( (passenger: any) => passenger.name !== null)
        }),
      )
  }
}
