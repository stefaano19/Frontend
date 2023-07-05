import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AggiungiAppuntamentoComponent } from '../aggiungi-appuntamento/aggiungi-appuntamento.component';
import { CasaProduttrice } from '../model/casaProduttrice';
import { CaseProduttriciService } from '../services/case-produttrici.service';
import { TipologiaAuto} from '../model/tipologiaAuto';

@Component({
  selector: 'app-aggiungi-auto',
  templateUrl: './aggiungi-auto.component.html',
  styleUrls: ['./aggiungi-auto.component.scss']
})
export class AggiungiAutoComponent implements OnInit {
  form !: FormGroup;
  title !:string;
  id !: number;
  colore !: string;
  modello !: string;
  prezzo !: number;
  quantita !: number;
  showroom !: boolean;
  tipologia_auto !:object;
  casaproduttrice !: object;
  caseProduttrici: CasaProduttrice[]=[];
  tipologiaAuto= Object.values(TipologiaAuto);

  constructor(
    private casaProduttriceService:CaseProduttriciService,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef: MatDialogRef<AggiungiAppuntamentoComponent>
  ){
    this.title=data.title;
  }

  ngOnInit(): void {
    this.form=this.fb.group({
     id: ['', []],
      colore: ['',[]],
      prezzo:['',[Validators.required]],
      modello: ['', [Validators.required]],
      quantita:['',[Validators.required]],
      showroom: ['', [Validators.required]],
      tipologiaAuto: '',
      CP_ID: '',
    }),
    this.casaProduttriceService.getCase().subscribe(
      (result:any) =>{
        console.log(result);
        this.caseProduttrici=result;
        console.log(this.caseProduttrici);
      })
  }

  cancellaRegistrazione(){
    this.dialogRef.close();
  }


  aggiungiAuto(){
    console.log(this.form.value);
    this.form.value.CP_ID=this.form.value.CP_ID.join();
    this.form.value.tipologiaAuto=this.form.value.tipologiaAuto.join();
    this.dialogRef.close(this.form.value);
  }
}

