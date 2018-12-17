import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Button } from 'ionic-angular';
import firebase from 'firebase';
import { AlertController } from 'ionic-angular';


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

  

  
  

  

}
