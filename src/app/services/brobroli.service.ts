import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrobroliService {

  readonly apiUrl = 'http://localhost:3000/api';
  readonly ENDPOINT = "/users";
  constructor(private httpClient: HttpClient) { }

  getUsers(){
    return this.httpClient.get(`${this.apiUrl}${this.ENDPOINT}`);
  }
}
