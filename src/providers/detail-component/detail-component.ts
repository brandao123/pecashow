import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DetailComponentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DetailComponentProvider {

  commonService: any;
  firebaseURLYouKnow: any;
  constructor(public http: HttpClient) {
    console.log('Hello DetailComponentProvider Provider');
  }
  ionViewWillEnter() {
    this.http.post(this.firebaseURLYouKnow , {
        // pass uid of user clicked from listing page in API call
        uid: this.commonService.currentUID
    })
}
}
