import {NgModule} from '@angular/core';
import {IonicModule, IonicApp} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {ConfirmationPage} from '../pages/confirmation/confirmation';
import {ChartsPage} from '../pages/charts/charts';
import {BikeDetailPage} from '../pages/bike-detail/bike-detail';
import {ListViewPage} from '../pages/list-view/list-view';
import { Ionic2RatingModule } from 'ionic2-rating';
import {HttpModule} from '@angular/http';
import {Car2GoService} from '../util/car2go';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {LocationUtil} from '../providers/location-util';
import {BikeApiUtil} from '../providers/bike-api-util';
import {BikeFilterPipe} from '../pipes/bike-filter-pipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BikeDetailPage,
    TabsPage,
    ListViewPage,
    ConfirmationPage,
    ChartsPage,
    BikeFilterPipe
  ],
  imports: [
    IonicModule.forRoot(MyApp), HttpModule,
    Ionic2RatingModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BikeDetailPage,
    TabsPage,
    ListViewPage,
    ConfirmationPage,
    ChartsPage
  ],
  providers: [Car2GoService,LocationUtil,BikeApiUtil],
})
export class AppModule {}
