import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categoriamoto : any[] = new Array();

  categoriacarro : any[] = new Array();

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
    
  }
  

  ionViewDidLoad() {
    this.getList();
  }

  getList(){
    var postRef = firebase.firestore()
    .collection("categoriacarro, categoriamoto");

    postRef.get().then(query => {
      query.forEach(doc => {
        this.categoriacarro.push(doc.data());
        this.categoriamoto.push(doc.data());
      });
    });
  }

  


  

}
