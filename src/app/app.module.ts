import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

// import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import{AuthModule}from './auth/auth.module';
import{HttpClientModule,HttpHeaders}from '@angular/common/http';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
// import { Http, Headers, RequestOptions} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [ RouterModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpHeaders,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }