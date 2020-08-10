import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { CovidUpdatesComponent } from './covid-updates/covid-updates.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CentersComponent } from './centers/centers.component';
import { AppListComponent } from './app-list/app-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'manager', component: BoardManagerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'covid-updates', component: CovidUpdatesComponent },
  { path: 'centers', component: CentersComponent },
  { path: 'app-list', component: AppListComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
