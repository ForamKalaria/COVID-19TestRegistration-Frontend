import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8080/employees/';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ModeratorService {
  
  constructor(private http: HttpClient) { }


  register(data): Observable<any> {
    console.log("hii");
    return this.http.post(API_URL + 'update', {
      empId: data.empId,
      empName: data.empName,
      empEmail: data.empEmail,
      empContact: data.empContact,
      empType: data.empType,
      CENTER_ID: data.center_id,
      center_id: {
        center_id: data.center_id
      
      }

    }, httpOptions);
  }



}
