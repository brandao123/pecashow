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
  categoriamoto : any[] = new Array();

  categoriacarro : any[] = new Array();

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
     public navParams: NavParams) {
    
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'R$ 200,00',
      subTitle: 'Rua Barcellos Domingos, 124',
      buttons: ['OK']
    });
    alert.present();
  }


  ionViewDidLoad() {
    this.getListCarro();
    this.getListMoto();
  }

  getListCarro(){
    var postRef = firebase.firestore()
    .collection("categoriacarro");

    postRef.get().then(query => {
      query.forEach(doc => {
        this.categoriacarro.push(doc.data());
        
      });
    });
  }

  getListMoto(){
    var postRef = firebase.firestore()
    .collection("categoriamoto");

    postRef.get().then(query => {
      query.forEach(doc => {
        this.categoriamoto.push(doc.data());
        
      });
    });
  }

  
  

  

}
