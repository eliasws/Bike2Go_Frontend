import {HomePage} from '../home/home';
import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

/*
  Generated class for the BikeDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-bike-detail',
  templateUrl: 'bike-detail.html'
})
export class BikeDetailPage {
  homePage = HomePage;

  bike: any;
  favIcon: any;
  ratingStar0: any;
  ratingStar1: any;
  ratingStar2: any;
  ratingStar3: any;
  ratingStar4: any;
  ratingStar5: any;

  constructor(public navCtrl: NavController,public params:NavParams) {
    this.favIcon = "star-outline";

    this.setRating(2);

    this.bike = params.get("bike");
  }

  ionViewDidLoad() {
    console.log('Hello BikeDetailPage Page');
  }

  contactOwner() {
    window.open('mailto:spitzl.manuel@gmail.com');
  }

  changeFavIcon() {
    if(this.favIcon == "star") {
      this.favIcon = "star-outline";
    }
    else {
      this.favIcon = "star"
    }
  }

  setRating(rating: number) {
    this.ratingStar0 = "star-outline";
    this.ratingStar1 = "star-outline";
    this.ratingStar2 = "star-outline";
    this.ratingStar3 = "star-outline";
    this.ratingStar4 = "star-outline";
    
    switch(rating) {
      case 5:
        this.ratingStar4 = "star";
      case 4:
        this.ratingStar3 = "star";
      case 3:
        this.ratingStar2 = "star";
      case 2:
        this.ratingStar1 = "star";
      case 1:
        this.ratingStar0 = "star";
    }
  }

}
