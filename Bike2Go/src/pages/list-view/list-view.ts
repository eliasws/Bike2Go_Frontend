import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Bikes} from '../../util/data';
import { Geolocation } from 'ionic-native';

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
  
  constructor(public navCtrl: NavController) {
      this.bikes = Bikes;

    this.ratingStar0 = "star-outline";
    this.ratingStar1 = "star-outline";
    this.ratingStar2 = "star-outline";
    this.ratingStar3 = "star-outline";
    this.ratingStar4 = "star-outline";
    this.inner = "<img src='assets/img/betty.jpg>";

    Geolocation.getCurrentPosition().then((userPosition) => {

      this.userPosition = userPosition;
      console.log("LATITUDE: " + userPosition.coords.latitude);
      console.log("LONGITUDE: " + userPosition.coords.longitude);

    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('Hello ListViewPage Page');
  }

  deg2rad(deg) {
    return deg * (Math.PI/180);
  }

  FormatDistance(distance) {
    if(distance > 1) {
      return Math.round(distance * 10) / 10 + " km";
    }
    else {
      return Math.round(distance * 100) * 10 + " m";
    }
  }

  calculateDistance(bikePosition) {
	  try {
      let R = 6371; // Radius of the earth in km
      let dLat = this.deg2rad(this.userPosition.coords.latitude - bikePosition.lat);
      let dLon = this.deg2rad(this.userPosition.coords.longitude - bikePosition.lng);
      let a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
              Math.cos(this.deg2rad(bikePosition.lat)) * Math.cos(this.deg2rad(this.userPosition.coords.latitude)) * 
              Math.sin(dLon/2) * Math.sin(dLon/2);
      let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 

      // Distance in km
      let dist = R * c;

      return this.FormatDistance(dist);
    }
    catch (e) {
      return;
    }
  }

  getRatingStars(bikeRating) {
    let htmlResult = "";

    for(let i = 0; i < bikeRating; i++) {
      htmlResult += "<ion-icon name='star'></ion-icon>"
    }

    for(let i = 5; i > bikeRating; i--) {
      htmlResult += "<ion-icon name='star-outline'></ion-icon>"
    }

    return htmlResult;
  }


}


