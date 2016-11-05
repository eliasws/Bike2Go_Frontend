import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Geolocation } from 'ionic-native';

/*
  Generated class for the LocationUtil provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationUtil {
  userPosition: any;

  constructor(public http: Http) {
    console.log('Hello LocationUtil Provider');
    Geolocation.getCurrentPosition().then((userPosition) => {

      this.userPosition = userPosition;
      console.log("LATITUDE: " + userPosition.coords.latitude);
      console.log("LONGITUDE: " + userPosition.coords.longitude);

    }, (err) => {
      console.log(err);
    });
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


}
