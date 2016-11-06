import {HomePage} from '../home/home';
import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {LocationUtil} from '../../providers/location-util';
import {BikeApiUtil} from '../../providers/bike-api-util';
import { LaunchNavigator, LaunchNavigatorOptions } from 'ionic-native';

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
  lockOpen:boolean = false;
  bringBackDate:any;
  location:any;
  maxDistanceInM = 600;

  constructor(public navCtrl: NavController,public params:NavParams,public locationUtil:LocationUtil,public bikeApiUtil:BikeApiUtil) {
    this.favIcon = "star-outline";

    this.setRating(2);

    this.bike = params.get("bike");
    console.log("bike name: " + this.bike.name);
    bikeApiUtil.getLockStatus().subscribe((json)=>{console.log("message arrived: "+JSON.stringify(json));this.lockOpen=json.open;});
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

  toggleLock() {
    if(this.lockOpen) {
      this.closeLock();
    }
    else {
      this.openLock();
    }
  }

  getLockStatus() {
    this.bikeApiUtil.getLockStatus().subscribe((json)=>{console.log("message arrived: "+JSON.stringify(json));this.lockOpen=json.open;});
  }
  
  makeSound() {
    this.bikeApiUtil.makeSound().subscribe((msg)=>{console.log("message arrived: "+msg);});
  }

  openLock() {
    this.bikeApiUtil.openLock().subscribe((msg)=>{console.log("message arrived: "+msg);this.getLockStatus();});
  }

  closeLock() {
    this.bikeApiUtil.closeLock().subscribe((msg)=>{console.log("message arrived: "+msg);this.getLockStatus();});
  }

  getLockImg() {
    if(this.lockOpen) {
      return "../../assets/icons/lock_" + this.bike.category.type + "_open.png";
    }
    else {
      return "../../assets/icons/lock_" + this.bike.category.type + ".png";
    }
  }

  getMaintenanceDesc() {
    let maintenanceDesc = "";

    switch(this.bike.maintenanceStatus) {
      case 100:
      maintenanceDesc = "OK";
      break;
      default:
      case 200:
      maintenanceDesc = "Überprüfen";
      break;
      case 300:
      maintenanceDesc = "Reparieren";
      break;
    }

    return maintenanceDesc;
  }

  getMaintenanceIcon() {
    let maintenanceIcon = "../../assets/icons/";

    switch(this.bike.maintenanceStatus) {
      case 100:
      maintenanceIcon += "StatusOK.png";
      break;
      default:
      case 200:
      maintenanceIcon += "Kontrollieren.png";
      break;
      case 300:
      maintenanceIcon += "Werkzeug.png";
      break;
    }
    
    return maintenanceIcon;
  }

  displayInRangeButtons() {
    return this.locationUtil.calculateDistance(this.bike.position) <= (this.maxDistanceInM / 1000);
  }

  startGoogleMapsNavigation() {

    let options: LaunchNavigatorOptions = {
      start: [this.locationUtil.userPosition.coords.latitude,this.locationUtil.userPosition.coords.longitude]
    };

    LaunchNavigator.navigate([this.bike.position.lat,this.bike.position.lng],options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

}
