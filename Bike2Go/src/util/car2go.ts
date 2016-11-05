import {Injectable} from '@angular/core';
import * as http from 'http';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Car2GoService{
  private baseUrl: string = 'https://bikebackend.herokuapp.com/bike/api/v1/car2go/vehicles?loc=Stuttgart&oauth_consumer_key=Octopus&format=json';
  constructor(private http : Http){
  }

  getAll(): Observable<any>{ 
    return this.http.get(this.baseUrl)
                        // ...and calling .json() on the response to return data
                         .map((res) => res.json().placemarks)
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  // other code...
}