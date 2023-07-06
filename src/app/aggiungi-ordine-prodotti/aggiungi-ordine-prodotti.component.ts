import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { AggiungiAppuntamentoComponent } from '../aggiungi-appuntamento/aggiungi-appuntamento.component';
import { Auto } from '../model/auto';
import { CasaProduttrice } from '../model/casaProduttrice';
import { AutoService } from '../service/auto.service';
import { CaseProduttriciService } from '../services/case-produttrici.service';
import { Prodotto } from '../model/prodotto';
import { Fornitore } from '../model/fornitore';
import { FornitoreService } from '../services/fornitore.service';
import { ProdottiService } from '../services/prodotti.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-aggiungi-ordine-prodotti',
  templateUrl: './aggiungi-ordine-prodotti.component.html',
  styleUrls: ['./aggiungi-ordine-prodotti.component.scss']
})
export class AggiungiOrdineProdottiComponent implements OnInit {

  
  form !: FormGroup;
  title !:string;
  conforme !: boolean;
  dataOrdine !: Data;
  prodotto !:object;
  prodotti: Prodotto[]=[];
  fornitori: Fornitore[]=[];
  fornitore !: object;

  constructor(
    private fornitoreService:FornitoreService,
    private prodottoService:ProdottiService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef: MatDialogRef<AggiungiAppuntamentoComponent>
  ){
    this.title=data.title;
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      conforme: ['', []],
      dataOrdine: ['',[]],
      cp_F:['',[]],
      prodotto:['',[]]
    }),
    this.fornitoreService.getFornitori().subscribe(
      (result:any) =>{
        console.log(result);
        this.fornitori=result;
        console.log(this.fornitori);
      }),
      this.prodottoService.getProdotti().subscribe(
        (result:any) =>{
          console.log(result);
          this.prodotti=result;
          console.log(this.prodotti);
        })
  }

  cancellaRegistrazione(){
    this.dialogRef.close();
  }

  aggiungiFornitore(){
    console.log(this.form.value);
    this.form.value.cp_F=this.form.value.cp_F.join();
    this.form.value.dataOrdine=formatDate(this.form.value.dataOrdine, 'YYYY-MM-ddThh:mm:ss','en-US');
    this.dialogRef.close(this.form.value);
  }
}

