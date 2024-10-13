import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Inscription} from "../interface/Inscription";
import {Login} from "../interface/Login";
@Injectable({
  providedIn: 'root'
})
export class BrobroliService {

  private host : string = 'http://localhost:8080/api';
  private hostAuth : string = 'http://localhost:8080/authe';

  constructor(private http: HttpClient) { }

  inscriptionProvider(donnee:Inscription): Observable<any> {
    return this.http.post<any>(`${this.hostAuth}/providers`, donnee);
  }
  inscriptionCustomer(donnee:Inscription): Observable<any> {
    return this.http.post<any>(`${this.hostAuth}/customers`, donnee);
  }
  login(donnee:Login): Observable<any> {
    return this.http.post<any>(`${this.hostAuth}/authenticate`, donnee);
  }

}
