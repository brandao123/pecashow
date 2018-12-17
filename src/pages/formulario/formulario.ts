import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';
import { Firebase } from '@ionic-native/firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  formGroup : FormGroup;
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots: false};

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public firebaseauth : AngularFireAuth ,
  
     public storage: AngularFireStorage,
     public formBuilder: FormBuilder) {

      this.firestore.settings(this.settings);

      this.formGroup = this.formBuilder.group({
        preco: ['', [Validators.required]],
        categoria: ['', [Validators.required]],
        descricao: ['', [Validators.required]],
        id: [''],
        foto: ['']
      });

  }

  ionViewDidLoad() { 
  }

  cadastrar(){
    // Pega o id único do usuário
     this.formGroup.controls['id'].setValue(this.firebaseauth.auth.currentUser.uid);
   
       firebase.firestore().collection("categoriaCarro").add(
         this.formGroup.value
       ).then(function(ref){
         // Sucesso
        console.log("sucesso");
        console.log(ref.id);
       }).catch(err => {
         console.log(err);
       });
   

   
     }

}
