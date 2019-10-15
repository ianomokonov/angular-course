import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlacesListComponent } from './first-home-work/places-list/places-list.component';
import { WeatherComponent } from './first-home-work/weather/weather.component';
import { SocialComponent } from './first-home-work/social/social.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FirstHomeWorkComponent } from './first-home-work/first-home-work.component';
import { SecondHomeWorkComponent } from './second-home-work/second-home-work.component';
import { ApiService } from './second-home-work/api.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlacesListComponent,
    WeatherComponent,
    SocialComponent,
    FirstHomeWorkComponent,
    SecondHomeWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
