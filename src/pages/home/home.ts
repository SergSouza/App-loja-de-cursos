import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista = [
    { id: 1, titulo: "Curso de React-native", descricao: "Aprenda REACT_NATIVE na pratica", valor: 29.99, valor_txt: "R$ 29,99", imagem: "https://reactnative.dev/img/logo-og.png" },
    { id: 2, titulo: "Curso de JavaScrip", descricao: "Aprenda JavaScrip na pratica", valor: 29.99, valor_txt: "R$ 29,99", imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"}
  ];

  constructor(public navCtrl: NavController) {

  }

}
