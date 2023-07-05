import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appuntamento } from '../model/appuntamento';
import { Fornitore } from '../model/fornitore';

@Injectable({
  providedIn: 'root'
})
export class FornitoreService {
  url=environment.apiUrl;
  constructor(private httpClient:HttpClient) { 
  }

  add(fornitore?:Fornitore):Observable<Fornitore>{
    return this.httpClient.post<Appuntamento>('http://localhost:8080/fornitori/creaFornitore', fornitore)
  }
  getFornitori(){
    console.log(this.httpClient.get<Fornitore[]>('http://localhost:8080/fornitori').subscribe());
    return this.httpClient.get(this.url+"/fornitori");
  }
}
