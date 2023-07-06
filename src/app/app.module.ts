import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
import { LoginComponent } from './login/login.component';
import { AggiungiAppuntamentoComponent } from './aggiungi-appuntamento/aggiungi-appuntamento.component';
import { AggiungiFornitoreComponent } from './aggiungi-fornitore/aggiungi-fornitore.component';
import { AggiungiCasaProduttriceComponent } from './aggiungi-casa-produttrice/aggiungi-casa-produttrice.component';
import { AggiungiAutoComponent } from './aggiungi-auto/aggiungi-auto.component';
import { AggiungiProdottoComponent } from './aggiungi-prodotto/aggiungi-prodotto.component';
import { AggiungiOrdineProdottiComponent } from './aggiungi-ordine-prodotti/aggiungi-ordine-prodotti.component';
import { AggiungiOrdineAutoComponent } from './aggiungi-ordine-auto/aggiungi-ordine-auto.component';
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  text:"Loading",
  textColor:"#FFFFFF",
  textPosition:"center-center",
  bgsColor:"#7b1fa2",
  fgsColor:"#7b1fa2",
  fgsType:SPINNER.squareJellyBox,
  fgsSize:100,
  hasProgressBar:false
}

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    RegistrazioneComponent,
    LoginComponent,
    AggiungiAppuntamentoComponent,
    AggiungiFornitoreComponent,
    AggiungiCasaProduttriceComponent,
    AggiungiAutoComponent,
    AggiungiProdottoComponent,
    AggiungiOrdineProdottiComponent,
    AggiungiOrdineAutoComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
