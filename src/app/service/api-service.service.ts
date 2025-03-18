import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
   auth_token:any = localStorage.getItem('auth_token');
   headers:any = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
   requestOptions:any = { headers: this.headers };
   apiUrl:string='http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  public login(data: any): Observable<any> {
    const url = this.apiUrl+'login';
    return this.http.post<any>(url, data);
  }
  public getTasks(): Observable<any> {
    const url = this.apiUrl+'tasks';
    return this.http.get<any>(url,this.requestOptions);
  }

  public addTasks(data:any): Observable<any> {
    const url = this.apiUrl+'tasks/add';
    return this.http.post<any>(url,data,this.requestOptions);
  }

  public updateTasks(data:any,id:any): Observable<any> {
    const url = this.apiUrl+'tasks/'+id+'/';
    return this.http.put<any>(url,data,this.requestOptions);
  }
  public deleteTask(id:any): Observable<any> {
    const url = this.apiUrl+'tasks/'+id+'/';
    return this.http.delete<any>(url,this.requestOptions);
  }
}
