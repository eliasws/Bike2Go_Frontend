import {NgModule} from '@angular/core';
import {IonicModule, IonicApp} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {BikeDetailPage} from '../pages/bike-detail/bike-detail';
import {ListViewPage} from '../pages/list-view/list-view'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BikeDetailPage,
    TabsPage,
    ListViewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BikeDetailPage,
    TabsPage,
    ListViewPage
  ],
  providers: []
})
export class AppModule {}
