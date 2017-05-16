import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { ItemListComponent } from './item-list.component';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: Component;
  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.rootPage = ItemListComponent;
    });
  }
}

