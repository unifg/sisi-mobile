import { IUser } from './../../interfaces/IUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '@angular/compiler'

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url: string = 'http://104.131.99.239:5050/'
  headers:any;
  token:any;

  constructor(
    public http: HttpClient) {
    this.headers = {"headers": {"authorization": "Bearer" + this.token}}
  }

  authUser(username, password) {
    this.http.post(this.url + 'oauth/token', {
      username: username,
      password: password,
      grant_type: 'password',
      client_id: 2,
      client_secret: 'g422Ugg1VaW9UcXaqrUKe6hJNb7tETtViB9AtY4X'
    })

    this.http.get<IUser>(this.url + "api/user/authenticated/1",)

    }



  }


