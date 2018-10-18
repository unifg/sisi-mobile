import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the OccurrenceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OccurrenceProvider {
  url:string = 'http://104.131.99.239:5050/';

  constructor(public http: HttpClient) {

  }

  registerOccurrence(occurrence) {
    let headers = new HttpHeaders()
    headers.set("Accept", 'application/json')
    headers.set('Content-Type', 'application/json')
    // const requestOptions = new HttpParams()

    this.http.post(this.url + 'api/occurrence-reports', occurrence, { 
      "headers": headers 
    })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }
}
