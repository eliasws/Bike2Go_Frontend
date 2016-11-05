import {BikeDetailPage} from '../bike-detail/bike-detail';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Geolocation } from 'ionic-native';


declare var google;
 
@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  bikeDetailPage = BikeDetailPage;
     
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController) {

  }
 
  ionViewDidLoad(){
    console.log("TEST");
    this.loadMap();
  }
 
  loadMap(){
 
    Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.addMyPositionMarker(latLng);
 
    }, (err) => {
      console.log(err);
    });
 
  }

  addMyPositionMarker(pos){
     let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: pos
  });
 
  let content = "<h4>Hallo hier sind wir!</h4>";          
 
  this.addInfoWindow(marker, content);
  }

  addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 
  let content = "<h4>Information!</h4>";          
 
  this.addInfoWindow(marker, content);
 
}

bikeDetail() {
  
}

addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}
 
}
