import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
  
  

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { CovidUpdatesComponent } from './covid-updates/covid-updates.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CentersComponent } from './centers/centers.component';
import { AppListComponent } from './app-list/app-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardManagerComponent,
    BoardUserComponent,
    CovidUpdatesComponent,
    AppointmentComponent,
    CentersComponent,
    AppListComponent,
    ContactUsComponent,
    //BrowserAnimationsModule,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
