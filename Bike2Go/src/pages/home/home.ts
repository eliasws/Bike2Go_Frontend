import {BikeDetailPage} from '../bike-detail/bike-detail';
import {Component, NgModule, ViewChild, ElementRef} from '@angular/core';
import {Slides, ModalController, Platform} from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import {MapsStyle} from '../../util/maps-util';
import {Bikes} from '../../util/data';
import {Car2GoService} from '../../util/car2go';
import {ConfirmationPage} from '../confirmation/confirmation';

declare var google: any;
declare var nfc: any;

declare var google:any;
declare var nfc:any;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
})
export class HomePage {
  bikeDetailPage = BikeDetailPage;
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('mySlider') slider: Slides;
  map: any;
  bikes: any;
  filteredBikes: any;
  slideOptions: any;
  bounds = new google.maps.LatLngBounds();
  filterCategory = "ALL";


  constructor(public modalCtrl: ModalController, public car2go: Car2GoService, public platform: Platform) {

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
      this.addNfc();
      this.loadMap();
    });

  }


  addNfc() {
    try {
      if (nfc || typeof nfc !== 'undefined') {
        nfc.addNdefListener(
           (nfcEvent) => {
            let tag = nfcEvent.tag,
              ndefMessage = tag.ndefMessage;
                          console.log(JSON.stringify(ndefMessage));
              let data=nfc.bytesToString(ndefMessage[0].payload).substring(3);
            //alert(ndefMessage);
            console.log(JSON.stringify(data));
            console.log(data.id);
            let bike = this.bikes[JSON.parse(data).id-1];
          this.openBikeDetail(bike);
            //let data=nfc.bytesToString(ndefMessage.payload).substring(3);

          },
          function () { // success callback
            return;
          },
          function (error) { // error callback
            alert("Error adding NDEF listener " + JSON.stringify(error));
          }
        );
      }
    } catch (e) {
      // let modal = this.modalCtrl.create(BikeDetailPage,{bike:bike});
      //         modal.present(modal);
    }
  }


  loadMap() {
    let options = { enableHighAccuracy: true, maximumAge: 100, timeout: 60000 };

    /*Geolocation.getCurrentPosition(options).then(
      (position) => {
        this.onGeoSuccess(position)
      }, (err) => {
        console.log(err);
      });*/

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
    if(this.filterCategory == "ALL" || this.filterCategory == "NONE") {
      this.car2go.getAll().subscribe((cars) => {


        for (let car of cars) {
          let latLng = new google.maps.LatLng(car.coordinates[1], car.coordinates[0]);
          this.addMyPositionCar2Gp(latLng);
        }

      });
    }
    this.addMyPositionMarker(latLng);
    for (let bike of this.bikes) {
      if(this.filterCategory == "ALL" || bike.category.type == this.filterCategory) {
        this.addBikeMarker(bike);
      }
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
    if(this.filterCategory != "ALL" && bike.category.type != this.filterCategory) return;    
    let image = 'assets/icons/' + bike.category.type + ".png";
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(bike.position.lat, bike.position.lng),
      icon: image
    });
    //this.bounds.extend(marker.position);
    marker.addListener('click', () => this.openBikeDetail(bike))
    //this.addInfoWindow(marker, content);
    
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
  }

  openBikeDetail(bike) {
    //this.navCtrl.push(this.bikeDetailPage,{bike:bike});    
    const modal = this.modalCtrl.create(BikeDetailPage, { bike: bike });
    modal.present(modal);
  }

  resetSlider() {
    this.slider.slideTo(0);
  }

  updateFilter(filterCategory) {
    this.filterCategory = filterCategory;
    let latLng = new google.maps.LatLng(48.815384, 9.212546);
    this.createMap(latLng);
    this.resetSlider();
  }

}
