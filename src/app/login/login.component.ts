import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtenteService } from '../services/utente.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';
import { Utente } from '../model/utente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide=true;
  utente: Utente= new Utente();
  u: string = "";
  constructor(private formBuilder:FormBuilder, private router:Router, private userService:UtenteService, public dialogRef:MatDialogRef<LoginComponent>,
    private ngxService:NgxUiLoaderService,
    private snackbarService:SnackbarService) { }
  ngOnInit(): void {
  }
  login(){
    console.log(this.utente);
    localStorage.setItem('email',this.u);
    this.userService.login(this.utente).subscribe(data=>{
      if(data==true){
        this.router.navigate(['/concessionario/dashboard']);
        this.snackbarService.openSnackBar("Benvenuto", 'undo');
      }
      if(data==false){
        this.router.navigate(['/concessionario/login']);
        this.snackbarService.openSnackBar("Utente non registrato", 'undo');
      }
    });
  }
}

