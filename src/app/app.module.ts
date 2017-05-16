import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ItemListComponent } from './item-list.component';
import { InspectionInteriorItemComponent } from './inspection-interior-item.component';
import { ActionValueComponent } from './action-value.component';

@NgModule({
  declarations: [
    MyApp,
    ItemListComponent,
    InspectionInteriorItemComponent,
    ActionValueComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ItemListComponent
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
