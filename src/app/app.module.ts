import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { CityObjectSelectorComponent } from './components/city-object-selector/city-object-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CitySelectorComponent,
    CityObjectSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }