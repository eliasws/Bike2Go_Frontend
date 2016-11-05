import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {BikeDetailPage} from '../pages/bike-detail/bike-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BikeDetailPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BikeDetailPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
