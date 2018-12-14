import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';

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

  _alertCtrl: any;
  categoriaMoto : any[] = new Array();

  categoriaCarro : any[] = new Array();

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
     public navParams: NavParams) {
    
  }
 


  ionViewDidLoad() {
    this.getListCarro();
    this.getListMoto();
  }

  getListCarro(){
    var postRef = firebase.firestore()
    .collection("categoriaCarro");

    postRef.get().then(query => {
      query.forEach(doc => {
        this.categoriaCarro.push(doc.data());
        
      });
    });
  }

  getListMoto(){
    var postRef = firebase.firestore()
    .collection("categoriaMoto");

    postRef.get().then(query => {
      query.forEach(doc => {
        this.categoriaMoto.push(doc.data());
        
      });
    });
  }

  
  

  

}
