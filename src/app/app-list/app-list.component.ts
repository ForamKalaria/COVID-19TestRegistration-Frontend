import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../_services/appointment.service';
import { Appointments } from '../list/app-list';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  appointments: Appointments[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAllAppointments().subscribe(
      (      data: Appointments[]) => {
        this.appointments= data;
      },
      (      err: { error: string; }) => {
        this.appointments = JSON.parse(err.error).message;
      }
    );
  }
}


