import {Injectable} from '@angular/core';
import * as http from 'http';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Car2GoService{
  private baseUrl: string = 'https://www.car2go.com/api/v2.1/vehicles?loc=Stuttgart&oauth_consumer_key=Octopus&format=json';
  constructor(private http : Http){
  }

  getAll(): Observable<any>{ 
    let vehicles$ = this.http
      .get(this.baseUrl);
      
      console.log(vehicles$);
      return vehicles$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  // other code...
}