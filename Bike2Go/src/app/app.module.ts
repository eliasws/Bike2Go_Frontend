import {NgModule} from '@angular/core';
import {IonicModule, IonicApp} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {Confirmation} from '../pages/confirmation/confirmation';
import {BikeDetailPage} from '../pages/bike-detail/bike-detail';
import {ListViewPage} from '../pages/list-view/list-view';
import { Ionic2RatingModule } from 'ionic2-rating';
import {HttpModule} from '@angular/http';
import {Car2GoService} from '../util/car2go'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BikeDetailPage,
    TabsPage,
    ListViewPage,
    Confirmation
  ],
  imports: [
    IonicModule.forRoot(MyApp), HttpModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BikeDetailPage,
    TabsPage,
    ListViewPage,
    Confirmation
  ],
  providers: [Car2GoService]
})
export class AppModule {}
