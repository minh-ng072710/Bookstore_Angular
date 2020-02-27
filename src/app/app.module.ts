import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/Blocks/Menu/menu.component';
import { SliderComponent } from './Components/Blocks/Slider/slider.component';
import { UserComponent } from './Components/Blocks/User/user.component';
import { CateComponent } from './Components/Blocks/Categories/categories.component';







@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SliderComponent,
    UserComponent,
    CateComponent,
   
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
