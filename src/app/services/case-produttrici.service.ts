import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Appuntamento } from '../model/appuntamento';
import { CasaProduttrice } from '../model/casaProduttrice';
import { Fornitore } from '../model/fornitore';

@Injectable({
  providedIn: 'root'
})
export class CaseProduttriciService {
  url=environment.apiUrl;
  constructor(private httpClient:HttpClient) { 
  }

  add(casaProduttrice?:CasaProduttrice):Observable<CasaProduttrice>{
    return this.httpClient.post<CasaProduttrice>('http://localhost:8080/caseProduttrici/creaCasaProduttrice', casaProduttrice)
  }
  getCase(){
    console.log(this.httpClient.get<CasaProduttrice[]>('http://localhost:8080/caseProduttrici').subscribe());
    return this.httpClient.get(this.url+"/caseProduttrici");
  }
}
