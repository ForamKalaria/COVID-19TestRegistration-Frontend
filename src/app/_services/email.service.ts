import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenStorageService } from '../_services/token-storage.service';
import { PatientService } from './patient.service';
import { AppointmentService } from './appointment.service';

const API_URL = 'http://localhost:8080/send-mail/';

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  currentUser: any;
  form: any;



  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService, private appointmentService: AppointmentService) { }



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  sendEmail() {
    this.currentUser = this.tokenStorageService.getUser();
    console.log(this.currentUser.email);
    return this.http.post(API_URL, {
      emailAddress: this.currentUser.email,
      subject: "Appointment Confirmation!",
      bodyText: this.currentUser.username + " your aappointment is registered!"
    }, this.httpOptions).subscribe(); //{'headers':headers}).subscribe();      //.subscribe(response => {console.log(JSON.parse(response.toString()))});
  }

  sendOtherEmail(form: { email: any; }) {
    return this.http.post(API_URL, {
      emailAddress: form.email,
      subject: "Appointment Confirmation!",
      bodyText: " Your aappointment is registered!"
    }, this.httpOptions).subscribe();
  } 

}


  
