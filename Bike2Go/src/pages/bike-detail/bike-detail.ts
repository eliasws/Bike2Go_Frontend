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
  lockOpen:boolean = false;
  bringBackDate:any;
  location:any;
  maxDistanceInM = 100;

  constructor(public navCtrl: NavController,public params:NavParams,public locationUtil:LocationUtil,public bikeApiUtil:BikeApiUtil) {
    this.favIcon = "star-outline";

    this.bike = params.get("bike");
    bikeApiUtil.getLockStatus().subscribe((json)=>{console.log("message arrived: "+JSON.stringify(json));this.lockOpen=json.open;});
  }

  ionViewDidLoad() {
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
