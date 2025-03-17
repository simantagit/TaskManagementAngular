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

  constructor(private http: HttpClient) { }

  public login(data: any): Observable<any> {
    const url = 'http://127.0.0.1:8000/api/login';
    return this.http.post<any>(url, data);
  }
  public getTasks(): Observable<any> {
    let auth_token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
    const requestOptions = { headers: headers };
    const url = 'http://127.0.0.1:8000/api/tasks';
    return this.http.get<any>(url,requestOptions);
  }

  public addTasks(data:any): Observable<any> {
    let auth_token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
    const requestOptions = { headers: headers };
    const url = 'http://127.0.0.1:8000/api/tasks/add';
    return this.http.post<any>(url,data,requestOptions);
  }

  public updateTasks(data:any,id:any): Observable<any> {
    let auth_token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
    const requestOptions = { headers: headers };
    const url = 'http://127.0.0.1:8000/api/tasks/'+id+'/';
    return this.http.put<any>(url,data,requestOptions);
  }
  public deleteTask(data:any,id:any): Observable<any> {
    let auth_token = localStorage.getItem('auth_token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
    const requestOptions = { headers: headers };
    const url = 'http://127.0.0.1:8000/api/tasks/'+id+'/';
    return this.http.delete<any>(url);
  }
}
