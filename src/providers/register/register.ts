import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterProvider {
  sisi_api = 'http://104.131.99.239:5050/api/mobile'

  constructor(public http: HttpClient) {

  }

  registerUser(usuario) {
    let headers = new HttpHeaders()
    headers.set("Accept", 'application/json')
    headers.set('Content-Type', 'application/json')
    // const requestOptions = new HttpParams()

    this.http.post(`${this.sisi_api}/users`, usuario, { "headers": headers })
      .subscribe(data => {
        console.log(data);
      }, error => {
        console.log(error);
      })
  }

}
