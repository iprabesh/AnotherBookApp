import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { BookComponent } from './book/book.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MidnavComponent } from './midnav/midnav.component';
import { FooterComponent } from './footer/footer.component';
import { NewreleaseComponent } from './newrelease/newrelease.component';
import { BestComponent } from './best/best.component';
import { ComingsoonComponent } from './comingsoon/comingsoon.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddbookComponent } from './addbook/addbook.component';
import { BookService } from './_services/book.service';


@NgModule({
   declarations: [
      AppComponent,
      BookComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MidnavComponent,
      FooterComponent,
      NewreleaseComponent,
      BestComponent,
      ComingsoonComponent,
      AddbookComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [
      AuthService,
      BookService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
