import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AggiungiAppuntamentoComponent } from '../aggiungi-appuntamento/aggiungi-appuntamento.component';

@Component({
  selector: 'app-aggiungi-casa-produttrice',
  templateUrl: './aggiungi-casa-produttrice.component.html',
  styleUrls: ['./aggiungi-casa-produttrice.component.scss']
})
export class AggiungiCasaProduttriceComponent implements OnInit {
  form !: FormGroup;
  title !:string;
  partitaIva !: string;
  ragioneSociale !: string;
  marchio !: string;
  sede !: string;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data:any,
    private dialogRef: MatDialogRef<AggiungiAppuntamentoComponent>
  ){
    this.title=data.title;
  }

  ngOnInit(): void {
    this.form=this.fb.group({
      id: ['', []],
      partitaIva: ['',[]],
      ragioneSociale:['',[Validators.required]],
      marchio: ['', [Validators.required]],
      sede:['',[]]
    })
  }

  cancellaRegistrazione(){
    this.dialogRef.close();
  }

  aggiungiCasaProduttrice(){
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }
}


