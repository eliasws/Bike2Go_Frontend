import {Component} from '@angular/core';

import {HomePage} from '../home/home';

import {ListViewPage} from '../list-view/list-view';
// import {ChartPage} from '../chart/chart';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = ListViewPage;
  // tab3Root: any = ChartPage;
  constructor() {

  }
}
