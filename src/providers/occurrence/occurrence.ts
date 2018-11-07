import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class OccurrenceProvider {
  // url: string = "http://209.97.147.27:81/";
  url: string = "http://104.131.99.239:5050/";


  constructor(public httpClient: HttpClient) {

  }

  registerOccurrence(occurrence) {
    let token = localStorage.getItem('token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    // let headers = new HttpHeaders()
    // headers.set("Accept", 'application/json')
    // headers.set('Content-Type', 'application/json')
    // headers.set('Authorization', `Bearer ${token}`)
    console.log(httpOptions);
    return this.httpClient.post(this.url + 'api/occurrence-reports', occurrence, httpOptions)
  }
}
