import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Inscription} from "../../domains/interfaces/Inscription";
import {Login} from "../../domains/interfaces/Login";
import {Balance} from "../../domains/interfaces/balance";
import {Service} from "../../domains/interfaces/Service";
@Injectable({
  providedIn: 'root'
})
export class BrobroliService {

  private host : string = '/host/api';
  private hostAuth : string = '/host/authe';

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
  getProvider(id:number): Observable<any> {
    return this.http.get<any>(`${this.host}/providers/id/${id}`);
  }
  recharge(balance:Balance,id:number):Observable<any>{
    return this.http.post(`${this.host}/customers/${id}`,balance)
  }
  retrait(sum:number,id:number): Observable<any> {
    return this.http.get<any>(`${this.host}/providers/retrait/${sum}/${id}`);
  }
  saveService(service:Service,id:number): Observable<any> {
    return this.http.post<any>(`${this.host}/providers/service/${id}`, service);
  }
  search(typeService:string,minPrice:number,maxPrice:number): Observable<any>{
    return this.http.get<any>(`${this.host}/services/${typeService}/${minPrice}/${maxPrice}`);
  }


}
