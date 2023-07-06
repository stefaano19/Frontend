import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AggiungiAppuntamentoComponent } from '../aggiungi-appuntamento/aggiungi-appuntamento.component';
import { Data } from '@angular/router';
import { CasaProduttrice } from '../model/casaProduttrice';
import { CaseProduttriciService } from '../services/case-produttrici.service';
import { AutoService } from '../service/auto.service';
import { Auto } from '../model/auto';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-aggiungi-ordine-auto',
  templateUrl: './aggiungi-ordine-auto.component.html',
  styleUrls: ['./aggiungi-ordine-auto.component.scss']
})
export class AggiungiOrdineAutoComponent implements OnInit {

  form !: FormGroup;
  title !:string;
  conforme !: boolean;
  dataOrdine !: Data;
  auto !:object;
  autoR: Auto[]=[];
  caseProduttrici: CasaProduttrice[]=[];
  casaproduttrice !: object;

  constructor(
    private casaProduttriceService:CaseProduttriciService,
    private autoService:AutoService,
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
      cp_C:['',[]],
      auto:['',[]]
    }),
    this.casaProduttriceService.getCase().subscribe(
      (result:any) =>{
        console.log(result);
        this.caseProduttrici=result;
        console.log(this.caseProduttrici);
      }),
      this.autoService.getAuto().subscribe(
        (result:any) =>{
          console.log(result);
          this.autoR=result;
          console.log(this.autoR);
        })
  }

  cancellaRegistrazione(){
    this.dialogRef.close();
  }

  aggiungiFornitore(){
    console.log(this.form.value);
    this.form.value.cp_C=this.form.value.cp_C.join();
    this.form.value.dataOrdine=formatDate(this.form.value.dataOrdine, 'YYYY-MM-ddThh:mm:ss','en-US');
    this.dialogRef.close(this.form.value);
  }

}

