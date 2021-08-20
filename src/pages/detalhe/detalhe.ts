import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AulaPage } from '../aula/aula';
/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  item = {};

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,) {

      this.item = this.navParams.get('dados')  
  }

  
  abriAula(item) {
    this.navCtrl.push(AulaPage,{ dados: item });
  }


}
