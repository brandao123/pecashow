import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireStorage } from 'angularfire2/storage';

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  formGroup : FormGroup;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public firestore: AngularFirestore,
     public firebaseauth: AngularFireAuth,
     public storage: AngularFireStorage,
     public formBuilder: FormBuilder) {

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
    // Cria um id único
    let id = this.firestore.createId();
    // Utiliza o id no formulário
    this.formGroup.controls['id'].setValue(id);
    // Pega o id único do usuário
    this.formGroup.controls['usuario'].setValue(
      this.firebaseauth.auth.currentUser.uid);
    

  }

}
