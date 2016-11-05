import {BikeDetailPage} from '../bike-detail/bike-detail';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {Slides, NavController} from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import {NFC} from 'ionic-native';
import {MapsStyle} from '../../util/maps-util'
import {Bikes} from '../../util/data'

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


  constructor(public navCtrl: NavController) {
    NFC.addNdefListener((onSucces)=>{alert("NFC!"), (onError)=>{alert("no nfc?")}})

    this.bikes = Bikes;

    this.slideOptions = {
      effect: "slide",
      slidesPerView: 3,
      zoom: true,
      zoomMax: 2,
      //loop: true,
      spaceBetween: 20,
      initialSlide: 0
    };
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    Geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeIds: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,

      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.map.setOptions({ styles: MapsStyle });

      this.addMyPositionMarker(latLng);
      for(let bike of this.bikes){
        console.log(bike);
        this.addBikeMarker(bike);
      }
      this.map.fitBounds(this.bounds);

    }, (err) => {
      console.log(err);
    });

  }


  addMyPositionMarker(pos) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: pos,
    });
    this.bounds.extend(marker.position);
    let content = "<h4>Hallo hier sind wir!</h4>";
    this.addInfoWindow(marker, content);
  }

  addBikeMarker(bike) {
    console.log(JSON.stringify(bike));
    let image = 'assets/icons/'+bike.category.type+".png";
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(bike.position.lat, bike.position.lng),
      icon : image
    });

    let content = "<h4>Information!</h4><br>"+bike.name;
    this.bounds.extend(marker.position);
    marker.addListener('click', ()=>this.changeChosenBike(bike))
    //this.addInfoWindow(marker, content);

  }

  changeChosenBike(bike){
    this.navCtrl.push(this.bikeDetailPage,{bike:bike});
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
    this.navCtrl.push(this.bikeDetailPage,{bike:bike});
  }


}
