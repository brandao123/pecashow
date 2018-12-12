import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class commonService {
    public commonService: string;
}
/*
  Generated class for the CommonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CommonServiceProvider Provider');
  }

}
