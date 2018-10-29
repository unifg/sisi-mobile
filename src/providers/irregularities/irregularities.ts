import { IIregularities } from './../../interfaces/IIregularities';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the IrregularitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class IrregularitiesProvider {
  url: string = "http://209.97.147.27:81/"
  constructor(public http: HttpClient) {
    console.log('Hello IrregularitiesProvider Provider');
  }

  saveIrregularitie(irregularities: IIregularities) {
    return this.http.post(this.url + 'api/irregularities', irregularities);
  }

}
