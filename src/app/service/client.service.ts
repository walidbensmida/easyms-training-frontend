import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'http://localhost:8093/api/v1/clients';
  }

  getClientById(id: number): Observable<any> {
    return this.http.get(this.baseURL + '/' + id);
  }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL);
  }

  public createClient(client: Client) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
    return this.http.post<Client>(this.baseURL, client,options);
    
  }
  
  public deleteClient(id: number) {
    return this.http.delete(this.baseURL + '/' + id);
  }

  public updateClient(id:number, client: Client) {
    console.log("update client service  ")
    return this.http.put(this.baseURL + '/' + id, client);
  }

}
  

