import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Utente } from 'src/app/model/utente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  registrazione(data:any):Observable<Response>{
    console.log(this.httpClient.post<Response>(this.url +"/utenti/registrazione",data));
    return this.httpClient.post<Response>(this.url +"/utenti/registrazione",data);
  }

  login(utente?:Utente):Observable<boolean>{
    return this.httpClient.post<boolean>(this.url +"/utenti/login",utente);
  }

}
