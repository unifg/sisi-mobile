import { IIregularities } from './../../interfaces/IIregularities';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/*
  Generated class for the IrregularitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IrregularitiesProvider {
  url: string = "http://104.131.99.239:5050/"
  constructor(public http: HttpClient) {
    console.log('Hello IrregularitiesProvider Provider');
  }

  saveIrregularitie(irregularitie: IIregularities) {
    let token = localStorage.getItem('token')
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    }
    console.log(httpOptions);
    console.log(irregularitie);

    return this.http.post(this.url + 'api/irregularity-reports', irregularitie, httpOptions);
  }

}
