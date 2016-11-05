import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Bikes} from '../../util/data'

/*
  Generated class for the ListView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-list-view',
  templateUrl: 'list-view.html'
})
export class ListViewPage {
  bikes: any;

  constructor(public navCtrl: NavController) {
      this.bikes = Bikes;
  }

  ionViewDidLoad() {
    console.log('Hello ListViewPage Page');
  }

}
