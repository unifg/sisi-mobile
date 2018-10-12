import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from "@angular/http";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
  }

  authUser(username, password) {


    this.http.post('http://104.131.99.239:5050/oauth/token', {
      username: username,
      password: password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'g422Ugg1VaW9UcXaqrUKe6hJNb7tETtViB9AtY4X'
    })

    this.http.get("http://104.131.99.239:5050/api/user/authenticated",)

    }



  }


