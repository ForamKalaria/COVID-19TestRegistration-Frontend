import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointments } from '../list/app-list';

const API_URL = 'http://localhost:8080/appointment/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  constructor(private http: HttpClient) { }


  register(data): Observable<any> {
    console.log("hii");
    return this.http.post(API_URL + 'insert', {
      appId: data.appId,
      CENTER_ID: data.center_id,
      EMPID: data.empId,
      EMAIL: data.email,
      appointmentDate: data.appointmentDate,
      appointmentTime: data.appointmentTime,
      center_id: {
        center_id: data.center_id

      },
      empId:{
          empId: data.empId
      },
      email: {
          email: data.email
      }


    }, httpOptions);
  }


  delete(id: number): Observable<any> {
    const abc = `${API_URL} + ${id}`;
    console.log(abc);
    return this.http.delete(API_URL + `${id}`,   { responseType: 'text' });
  
  }

  getAllAppointments(): Observable<any> {   
    return this.http.get(API_URL);
  
  }

  // getEmail(email): Observable<Appointments>{
  //   return this.http.post<Appointments>(API_URL + 'insert', email);
  
  // }

//   getByCenterId(): Observable<any> {   
//     return this.http.get(API_URL + `${id}`);
  
//   }



}
