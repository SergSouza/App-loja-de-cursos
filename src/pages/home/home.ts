import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhePage } from '../detalhe/detalhe';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 // nosso arrey de curso e dentro dele tem outro arrey de aulas
  lista = [
    { 
      id: 1, 
      titulo: "Curso de React-native", 
      descricao: "Aprenda REACT_NATIVE na pratica", 
      valor: 29.99, valor_txt: "R$ 29,99", 
      imagem: "https://reactnative.dev/img/logo-og.png",
      aula: [
        {
          id: "1",
          ordem: "1",
          titulo: "Introducao do curso",
          video: "https://www.youtube.com/embed/Y8tP1jbRYHY",
        },
       
        {
          id: "2",
          ordem: "2",
          titulo: "configurando o ambiente",
          video: "https://www.youtube.com/embed/_N6-kScr-Ig",
        }
        
      ]
    },
    
    { id: 2, 
      titulo: "Curso de JavaScrip", 
      descricao: "Aprenda JavaScrip na pratica", 
      valor: 29.99, valor_txt: "R$ 29,99", 
      imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
    
    }
  ];

  constructor(
    public navCtrl: NavController,
    
    ) {

  }

  abriDetalhe(item){
    this.navCtrl.push(DetalhePage,{dados:item});
 
  }

}
