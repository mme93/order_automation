import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ErrorComponent} from './pages/error/error.component';
import {RoutingGuard} from './shared/guard/routing.guard';

@NgModule({
  declarations: [AppComponent,ErrorComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy},RoutingGuard],
  bootstrap: [AppComponent],
})
export class AppModule {
}
