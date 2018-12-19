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
  imagem : any;

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
        endereco: ['', [Validators.required]],
        id: [''],
        foto: ['']
      });

  }

  ionViewDidLoad() { 
  }

  cadastrar(){
    // Pega o id único do usuário
 
   
       firebase.firestore().collection("categoriaCarro").add(
         this.formGroup.value
       ).then(ref=>{
         // Sucesso
        console.log("Cadastrado com sucesso");
        console.log(ref.id);
        this.add(ref.id);
       }).catch(err => {
         console.log(err);
       });
   

   
     }

     enviaArquivo(event){
      // Pega o arquivo 
      this.imagem = event.srcElement.files[0];
    }
  
    add(id : string){
     
      // Diretório + caminho imagem no servidor
      let caminho = firebase.storage().ref().child(`carros/${id}.jpg`);
      // Executa o upload
      caminho.put(this.imagem).then(resp => {
        // Se sucesso, pega a url para download da imagem
        caminho.getDownloadURL().then(url=>{
          // adicionar a url da imagem no form
          //this.formGroup.controls['imagem'].setValue(this.msg = url);
          // Cadastra os dados no Firestone
          console.log("imagem enviada")
          this.firestore.collection("categoriaCarro")
            .doc(id).update({'foto' : url, 'id' : id});
        });
      }).catch(err => {
        //Houve algum erro
        console.log(err.message);
      })
    }

}
