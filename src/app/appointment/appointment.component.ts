import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../_services/appointment.service';
import { EmailService } from '../_services/email.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  form: any = {};
  isInserted = false;
  isNotInserted = false;
  isDeleted = false;
  isNotDeleted = false;
  errorMessage = '';
  
  appId: number;
  center_id: number;
  empId: number;
  email: string;
  appointmentDate: number;
  appointmentTime: number;
 


  constructor(private appointmentService: AppointmentService, private emailService: EmailService, private route:ActivatedRoute ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.route.url)
    this.appointmentService.register(this.form).subscribe(
      _data => {
        
        //console.log(this.appId);
        this.isNotInserted = false;
        this.isInserted = true;
        
      },
      err => {
        console.log("hello");
        this.errorMessage = err.error.message;
        this.isNotInserted = true;
      }
    );
    
    this.emailService.sendOtherEmail(this.form);
    console.log("welcome");
    
  }

  onSubmit1(): void {
    console.log(this.form.appId);
    this.appointmentService.delete(this.form.appId).subscribe(
      
      _data => {
        

         this.isNotDeleted = false;
        this.isDeleted = true;
      },
      err => {
        console.log("hello");
        this.errorMessage = err.error.message;
        this.isNotDeleted = true;
      }
    );
  }


}
