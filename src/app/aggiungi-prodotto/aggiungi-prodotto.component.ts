import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AggiungiAppuntamentoComponent } from '../aggiungi-appuntamento/aggiungi-appuntamento.component';
import { CasaProduttrice } from '../model/casaProduttrice';
import { TipologiaAuto } from '../model/tipologiaAuto';
import { CaseProduttriciService } from '../services/case-produttrici.service';
import { Fornitore } from '../model/fornitore';
import { Tipologia } from '../model/tipologia';
import { FornitoreService } from '../services/fornitore.service';

@Component({
  selector: 'app-aggiungi-prodotto',
  templateUrl: './aggiungi-prodotto.component.html',
  styleUrls: ['./aggiungi-prodotto.component.scss']
})
export class AggiungiProdottoComponent implements OnInit {
  form !: FormGroup;
  title !:string;
  id !: number;
  prezzo !: number;
  marca !: string;
  nome !: string;
  tipologia !: string;
  disponibilita !: number;
  fornitore !:object;
  
  fornitori: Fornitore[]=[];
  tipologie:string[]=['MANUTENZIONE','GADGET'];

  constructor(
    private fornitoriService:FornitoreService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef: MatDialogRef<AggiungiAppuntamentoComponent>
  ){
    this.title=data.title;
  }

  ngOnInit(): void {
    this.form=this.fb.group({
     id: ['', []],
      prezzo:['',[Validators.required]],
      marca: ['', [Validators.required]],
      disponibilita:['',[Validators.required]],
      nome: ['', [Validators.required]],
      tipologia: '',
      cp_F: '',
    }),
    this.fornitoriService.getFornitori().subscribe(
      (result:any) =>{
        console.log(result);
        this.fornitori=result;
        console.log(this.fornitori);
      })
  }

  cancellaRegistrazione(){
    this.dialogRef.close();
  }


  aggiungiProdotto(){
    console.log(this.form.value);
    this.form.value.cp_F=this.form.value.cp_F.join();
    this.form.value.tipologia=this.form.value.tipologia.join();
    this.dialogRef.close(this.form.value);
  }
}
