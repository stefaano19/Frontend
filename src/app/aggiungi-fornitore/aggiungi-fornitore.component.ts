import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AggiungiAppuntamentoComponent } from '../aggiungi-appuntamento/aggiungi-appuntamento.component';

@Component({
  selector: 'app-aggiungi-fornitore',
  templateUrl: './aggiungi-fornitore.component.html',
  styleUrls: ['./aggiungi-fornitore.component.scss']
})
export class AggiungiFornitoreComponent implements OnInit {
  form !: FormGroup;
  title !:string;
  partitaIva !: string;
  ragioneSociale !: string;
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
      sede:['',[]]
    })
  }

  cancellaRegistrazione(){
    this.dialogRef.close();
  }

  aggiungiFornitore(){
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }

}
