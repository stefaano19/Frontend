import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utente } from '../model/utente';
import { Auto } from '../model/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { 
  }

  add(auto?:Auto):Observable<Auto>{
    return this.httpClient.post<Auto>('http://localhost:8080/auto/creaAuto', auto)
  }
  getAuto(){
    console.log(this.httpClient.get<Auto[]>('http://localhost:8080/auto').subscribe());
    return this.httpClient.get(this.url+"/auto");
  }
  getAutoDaOrdinare(){
    console.log(this.httpClient.get<Auto[]>('http://localhost:8080/auto/mostraAutoDaAcquistarePerModello').subscribe());
    return this.httpClient.get(this.url+"/auto/mostraAutoDaAcquistarePerModello");
  }
}
