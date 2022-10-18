import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LighteningComponent } from './lightening/lightening.component';
import { Twitter1Component } from './twitter1/twitter1.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LighteningComponent,
    Twitter1Component
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
