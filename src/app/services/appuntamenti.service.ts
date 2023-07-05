import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Appuntamento } from '../model/appuntamento';
import { Response } from '../model/response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppuntamentiService {
  url=environment.apiUrl;
  constructor(private httpClient:HttpClient) { 
  }

  add(appuntamento?:Appuntamento):Observable<Appuntamento>{
    return this.httpClient.post<Appuntamento>('http://localhost:8080/appuntamenti/creaAppuntamento', appuntamento)
  }
  getAppuntamenti(){
    console.log(this.httpClient.get<Appuntamento[]>('http://localhost:8080/appuntamenti').subscribe());
    return this.httpClient.get(this.url+"/appuntamenti");
  }

}
