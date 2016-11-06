import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BikeApiUtil} from '../../providers/bike-api-util';

@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html'
})
export class ConfirmationPage {

  constructor(public navCtrl: NavController, public bikeApiUtil:BikeApiUtil) {}

  ionViewDidLoad() {
  }

 openLock() {
    this.bikeApiUtil.openLock().subscribe((msg)=>{console.log("message arrived: "+msg);});
  }
}
