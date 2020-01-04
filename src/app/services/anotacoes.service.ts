import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AnotacoesService {

  public anotacoes: any = [];

  constructor(private storage: Storage) { 
    this.getAnotacoes();
  }

  getAnotacoes() {
    this.storage.get('anotacoes').then(data => {
      if (data) {
        this.anotacoes = data;
      }
      console.log('GetAnotacoes', this.anotacoes);
    }).catch(error => {
      console.error(error);
    });
  }

  setAnotacoes() {
    this.storage.set('anotacoes', this.anotacoes);
  }

  addAnotacao(titulo, anotacao, tags) {
    this.anotacoes.unshift({titulo, anotacao, tags});
    this.setAnotacoes();
  }

  addFotoAnotacao(titulo, foto, tags) {
    this.anotacoes.unshift({titulo, foto, tags});
    this.setAnotacoes();
  }

  delAnotacao(nota){
    this.anotacoes.splice(nota, 1);
    this.setAnotacoes();

}


}
