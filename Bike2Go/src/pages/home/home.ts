<<<<<<< HEAD
import {BikeDetailPage} from '../bike-detail/bike-detail';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Geolocation } from 'ionic-native';
=======
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import {NFC} from 'ionic-native';
>>>>>>> ea7ba0ea60963e6915df90889eeae4dbe313e472


declare var google;

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD
  bikeDetailPage = BikeDetailPage;
     
=======

>>>>>>> ea7ba0ea60963e6915df90889eeae4dbe313e472
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('bikeSlider') slider: Slides;
  map: any;
  slideOptions: any;

  constructor(public navCtrl: NavController) {
<<<<<<< HEAD

=======
    NFC.addNdefListener((onSucces)=>{alert("Du huso!"), (onError)=>{alert("no nfc?")}})

    this.slideOptions = {
      effect: "slide",
      slidesPerView: 3,
      zoom: true,
      zoomMax: 2,
      centeredSlides: true,
      loop: true,
      spaceBetween: 20
    };
>>>>>>> ea7ba0ea60963e6915df90889eeae4dbe313e472
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
      this.map.setOptions({ styles: this.mapsStyle });



      this.addMyPositionMarker(latLng);

    }, (err) => {
      console.log(err);
    });

  }

  addMyPositionMarker(pos) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: pos
    });

    let content = "<h4>Hallo hier sind wir!</h4>";

    this.addInfoWindow(marker, content);
  }

  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

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
    // let currentIndex = this.slider.getActiveIndex();
    console.log("Current index is", "test");
  }


  mapsStyle = [
    {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "saturation": 36
        },
        {
          "color": "#000000"
        },
        {
          "lightness": 40
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#000000"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        },
        {
          "weight": 1.2
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 20
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 21
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 29
        },
        {
          "weight": 0.2
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 18
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 16
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 19
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 17
        }
      ]
    }
  ]

<<<<<<< HEAD
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
 
=======
>>>>>>> ea7ba0ea60963e6915df90889eeae4dbe313e472
}
