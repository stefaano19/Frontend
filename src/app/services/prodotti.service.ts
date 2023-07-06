import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auto } from '../model/auto';
import { Prodotto } from '../model/prodotto';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { 
  }

  add(prodotto?:Prodotto):Observable<Prodotto>{
    return this.httpClient.post<Prodotto>('http://localhost:8080/prodotti/creaProdotto', prodotto)
  }
  getProdotti(){
    console.log(this.httpClient.get<Prodotto[]>('http://localhost:8080/prodotti').subscribe());
    return this.httpClient.get(this.url+"/prodotti");
  }
  getProdottiDaOrdinare(){
    return this.httpClient.get("http://localhost:8080/prodotti/mostraProdottiPerDisponibilità");
  }
}
