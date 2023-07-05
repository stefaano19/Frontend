import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-aggiungi-appuntamento',
  templateUrl: './aggiungi-appuntamento.component.html',
  styleUrls: ['./aggiungi-appuntamento.component.scss']
})
export class AggiungiAppuntamentoComponent implements OnInit {
  form !: FormGroup;
  title !:string;
  data = new FormControl(new Date());
  dataSerializzata= new FormControl(new Date().toJSON());
  testDrive !: string;
  auto !: [];


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
      data: ['',[]],
      testDrive:['',[Validators.required]],
      auto:[[],]
    })
  }

  cancellaRegistrazione(){
    this.dialogRef.close();
  }

  aggiungiAppuntamento(){
    this.form.value.data=formatDate(this.form.value.data, 'YYYY-MM-ddThh:mm:ss','en-US');
    console.log(this.form.value);
    this.dialogRef.close(this.form.value);
  }
}