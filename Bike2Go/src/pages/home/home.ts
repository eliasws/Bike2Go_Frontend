import { BikeDetailPage } from '../bike-detail/bike-detail';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Slides, NavController, Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { NFC } from 'ionic-native';
import { MapsStyle} from '../../util/maps-util';
import {Bikes} from '../../util/data'
import {Car2GoService} from '../../util/car2go'

declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
  bikeDetailPage = BikeDetailPage;
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('mySlider') slider: Slides;
  map: any;
  bikes: any;
  slideOptions: any;
  bounds = new google.maps.LatLngBounds();

  constructor(public navCtrl: NavController, public car2go :Car2GoService, public platform: Platform) {

    this.bikes = Bikes;

    this.slideOptions = {
      effect: "slide",
      slidesPerView: 3,
      zoom: true,
      zoomMax: 2,
      //loop: true,
      spaceBetween: 1,
      initialSlide: 0
    };

  }


  ionViewDidLoad() {
    this.platform.ready().then(() => {
      NFC.addNdefListener((onSucces) => { alert("NFC!"), (onError) => { alert("no nfc?") } })
      this.loadMap();
    });

  }

  test(){
    console.log(this.car2go.getAll());
  }

  loadMap() {
    let options = { enableHighAccuracy: true, maximumAge: 100, timeout: 60000 };

    Geolocation.getCurrentPosition(options).then(
      (position) => {
        this.onGeoSuccess(position)
      }, (err) => {
        console.log(err);
      });

          let latLng = new google.maps.LatLng(48.815384, 9.212546);
          this.createMap(latLng);
  }

  onGeoSuccess(position) {
    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.createMap(latLng)
  }


  createMap(latLng) {
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeIds: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.map.setOptions({ styles: MapsStyle });
    this.car2go.getAll().subscribe((cars)=>{


      for (let car of cars){
          console.log(car);
          let latLng = new google.maps.LatLng(car.coordinates[1], car.coordinates[0]);
          this.addMyPositionCar2Gp(latLng);
          console.log(latLng);
      }
    
  });
    this.addMyPositionMarker(latLng);
    for (let bike of this.bikes) {
      console.log(bike);
      this.addBikeMarker(bike);
    }

//this.map.fitBounds(this.bounds);
  }

  addMyPositionMarker(pos) {
    let image = 'assets/icons/standort.png';
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: pos,
      icon: image
    });
    this.bounds.extend(marker.position);
    let content = "<h4>Hallo hier sind wir!</h4>";
    this.addInfoWindow(marker, content);
  }

    addMyPositionCar2Gp(pos) {
    let image = 'assets/icons/Car2Go.png';
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: pos,
      icon: image
    });
    this.bounds.extend(marker.position);
  }

  addBikeMarker(bike) {
    let image = 'assets/icons/' + bike.category.type + ".png";
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(bike.position.lat, bike.position.lng),
      icon: image
    });

    let content = "<h4>Information!</h4><br>"+bike.name;
    //this.bounds.extend(marker.position);
    marker.addListener('click', () => this.changeChosenBike(bike))
    //this.addInfoWindow(marker, content);

  }

  changeChosenBike(bike) {
    this.navCtrl.push(this.bikeDetailPage, { bike: bike });
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  onSlideChanged() {
    let currentIndex = this.slider.getActiveIndex();
    console.log("Current index is", currentIndex);
  }


  openBikeDetail(bike) {
    console.log("PUSH");
    this.navCtrl.push(this.bikeDetailPage, { bike: bike });
  }


}
