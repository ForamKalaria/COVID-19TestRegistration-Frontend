import { Injectable } from '@angular/core';  
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { Observable} from 'rxjs';  
  

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({  
  providedIn: 'root'  
})  
export class CovidService {  
  
  constructor(private http: HttpClient) { }  
  private url: string = "https://api.covid19api.com/summary";  
  
  getData(): Observable<any> {  
    return this.http.get(this.url)  
      .pipe((response) => response);  
  } 
  
  getByCountry(): Observable<any> {
    return this.http.get(this.url) 
      .pipe((response) => response);
   }
}  