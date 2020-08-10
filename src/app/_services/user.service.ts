import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/centers/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {
  findAll: any;
  
  constructor(private http: HttpClient) { }


  register(data): Observable<any> {
    console.log("hii");
    return this.http.post(API_URL + 'insert', {
      center_id: data.center_id,
      center_location: data.center_location
    }, httpOptions);
  }

  deleteCenter(id: number): Observable<any> {
    const abc = `${API_URL} + ${id}`;
    console.log(abc);
    return this.http.delete(API_URL + `${id}`,   { responseType: 'text' });
  
  }

  findCenter(id: number): Observable<any> {
    const abc = `${API_URL} + 'get' + ${id}`;
    console.log(abc);
    return this.http.get(API_URL + `${id}`,   { responseType: 'text' });
  
  }

  getAllCenters(): Observable<any> {   
    return this.http.get(API_URL + 'all');
  
  }
 // `${this.API_URL1}/${id}`,
 

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  getManagerBoard(): Observable<any> {
    return this.http.get(API_URL + 'manager', { responseType: 'text' });
  }

}