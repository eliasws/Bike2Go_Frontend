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
  baseUrl = 'https://bikebackend.herokuapp.com/bike/api/v1/lock/';

  constructor(public http: Http) {
  }

  getLockStatus(id?):Observable<any> {
    let url;
       id ?  url = this.baseUrl+id+"/status" :  url= this.baseUrl+'TomDockle/status';
    var result = this.http.get(url).map((res) => res.json());
    console.log(result);
    return result;
  }

  makeSound(id?):Observable<any> {
        let url;
        id ?  url = this.baseUrl+id+"/sound" :  url= this.baseUrl+'TomDockle/sound';
    var result = this.http.get(url).map((res) => res.text());
    console.log(result);
    return result;
  }

  closeLock(id?):Observable<any> {
     let url;
        id ?  url = this.baseUrl+id+"/close" :  url= this.baseUrl+'TomDockle/close';
    var result = this.http.get(url).map((res) => res.text());
    console.log(result);
    return result;
  }

  openLock(id?):Observable<any> {
       let url;
        id ?  url = this.baseUrl+id+"/open" :  url= this.baseUrl+'TomDockle/open'
    var result = this.http.get(url).map((res) => res.text());
    console.log(result);
    return result;
  }
}
