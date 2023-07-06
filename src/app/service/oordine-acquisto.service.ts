import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrdineAcquisto } from '../model/ordineAcquisto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CasaProduttrice } from '../model/casaProduttrice';

@Injectable({
  providedIn: 'root'
})
export class OordineAcquistoService {
  url=environment.apiUrl;
  constructor(private httpClient:HttpClient) { 
  }

  addAuto(ordineAcquisto?:OrdineAcquisto):Observable<OrdineAcquisto>{
    return this.httpClient.post<OrdineAcquisto>('http://localhost:8080/ordini/creaOrdineAcquisto/Auto', ordineAcquisto)
  }

  addProdotto(ordineAcquisto?:OrdineAcquisto):Observable<OrdineAcquisto>{
    return this.httpClient.post<OrdineAcquisto>('http://localhost:8080/ordini/creaOrdineAcquisto/Prodotto', ordineAcquisto)
  }
  getOrdini(){
    console.log(this.httpClient.get<OrdineAcquisto[]>('http://localhost:8080/ordini').subscribe());
    return this.httpClient.get('http://localhost:8080/ordini');
}
getOrdiniProdotti(){console.log(this.httpClient.get<OrdineAcquisto[]>('http://localhost:8080/ordini/acquistoProdotti').subscribe());
  return this.httpClient.get('http://localhost:8080/ordini/acquistoProdotti');
}
}
