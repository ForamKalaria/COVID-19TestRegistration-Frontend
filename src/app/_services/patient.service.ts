import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/patient/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
  constructor(private http: HttpClient) { }
  
  register(data): Observable<any> {
    console.log("hii");
    console.log(data);
    return this.http.post(API_URL + 'insert', {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      password: data.password
    }, httpOptions);
  }

//   deleteCenter(id: number): Observable<any> {
//     return this.http.delete(API_URL + '${id}' ,  { responseType: 'text' });
//   }
}