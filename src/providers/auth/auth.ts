import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  sisi_api = 'http://104.131.99.239:5050'
  grant_type = 'password'
  client_id: any = 2
  client_secret: string = 'g422Ugg1VaW9UcXaqrUKe6hJNb7tETtViB9AtY4X'

  constructor(public http: HttpClient) {
  }

  authUser(username, password) {
    this.http.post(`${this.sisi_api}/oauth/token`, {
      username: username,
      password: password,
      grant_type: this.grant_type,
      client_id: this.client_id,
      client_secret: this.client_secret
    })
      .subscribe(data => {
        console.log(data)
      }, error => {
        console.log(error)
      })
  }

}
