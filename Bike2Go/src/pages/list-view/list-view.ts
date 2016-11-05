import {BikeDetailPage} from '../bike-detail/bike-detail';
import {Component} from '@angular/core';
import {ModalController} from 'ionic-angular';
import {Bikes} from '../../util/data';
import {LocationUtil} from '../../providers/location-util'

declare var google;

@Component({
  selector: 'page-list-view',
  templateUrl: 'list-view.html'
})
export class ListViewPage {
  bikes: any;
  ratingStar0: any;
  ratingStar1: any;
  ratingStar2: any;
  ratingStar3: any;
  ratingStar4: any;
  userPosition: any;
  inner: any;
  bikeDetailPage = BikeDetailPage;

  constructor(public modalCtrl: ModalController,public locationUtil : LocationUtil) {
      this.bikes = Bikes;

    this.ratingStar0 = "star-outline";
    this.ratingStar1 = "star-outline";
    this.ratingStar2 = "star-outline";
    this.ratingStar3 = "star-outline";
    this.ratingStar4 = "star-outline";
  }

  ionViewDidLoad() {
    console.log('Hello ListViewPage Page');
  }

  openBikeDetail(bike) {
    //this.navCtrl.push(this.bikeDetailPage,{bike:bike});    
    const modal = this.modalCtrl.create(BikeDetailPage,{bike:bike});
    modal.present(modal);
  }

}


