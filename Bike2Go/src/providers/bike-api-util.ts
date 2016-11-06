import * as url from 'url';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';

/*
  Generated class for the BikeApiUtil provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BikeApiUtil {
  lockStatus:any;

  constructor(public http: Http) {
    console.log('Hello BikeApiUtil Provider');
  }

  getLockStatus():Observable<any> {
    var url = 'https://bikebackend.herokuapp.com/bike/api/v1/lock/TomDockle/status';
    var result = this.http.get(url).map((res) => res.json());
    console.log(result);
    return result;
  }

  makeSound():Observable<any> {
    var url = 'https://bikebackend.herokuapp.com/bike/api/v1/lock/TomDockle/sound';
    var result = this.http.get(url).map((res) => res.text());
    console.log(result);
    return result;
  }

  closeLock():Observable<any> {
    var url = 'https://bikebackend.herokuapp.com/bike/api/v1/lock/TomDockle/close';
    var result = this.http.get(url).map((res) => res.text());
    console.log(result);
    return result;
  }

  openLock():Observable<any> {
    var url = 'https://bikebackend.herokuapp.com/bike/api/v1/lock/TomDockle/open';
    var result = this.http.get(url).map((res) => res.text());
    console.log(result);
    return result;
  }
}
