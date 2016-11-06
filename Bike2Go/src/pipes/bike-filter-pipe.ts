import { Injectable, Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the BikeFilterPipe pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'filter',
  pure: false
})

@Injectable()
export class BikeFilterPipe {
  
  transform(items: Array<any>, conditions: {[field: string] : any}) : Array<any> {
    return items.filter(item => {
      for (let field in conditions) {
        if (conditions[field] == "ALL"){
          return true;
        }
        if (item[field].type !== conditions[field]) {
          return false;
        }
      }
      return true;
    })
  }
}
