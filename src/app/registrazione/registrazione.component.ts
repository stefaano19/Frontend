import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtenteService } from '../services/utente.service';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GlobalConstants } from '../shared/global-constants';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {
  password=true;
  confirmpassword=true;
  signupForm:any= FormGroup;
  responseMessage:any;

  constructor(private formBuilder:FormBuilder, 
    private router:Router,
    private utenteService:UtenteService,
    private snackbarService:SnackbarService,
    public dialogRef:MatDialogRef<RegistrazioneComponent>,
    private ngxService:NgxUiLoaderService
    ) {}

  ngOnInit(): void {
    this.signupForm= this.formBuilder.group({
      cf:["", [Validators.required, Validators.pattern(GlobalConstants.cfRegex)]],
      nome:["",[Validators.required]],
      email:["",[Validators.required, Validators.pattern(GlobalConstants.emailRegex)]],
      password: ["", [Validators.required]],
      confirmpassword: ["", [Validators.required]]
  })
  }

  validateSubmit(){
    if(this.signupForm.controls['password'].value != this.signupForm.controls['confirmPassword'].value){
      return true;
    }
    else{
      return false;
    }
  }

  handleSubmit(){
    this.ngxService.start();
    var formData = this.signupForm.value;
    var data = {
      cf: formData.cf,
      nome: formData.nome,
      cognome: formData.cognome,
      email: formData.email,
      password: formData.password,
    }
    this.ngxService.stop();
     console.log(data)
    this.utenteService.registrazione(data).subscribe(response=>{
      console.log(response);
      this.ngxService.stop();
      this.dialogRef.close();
      this.responseMessage = response;
      console.log(this.responseMessage);
      this.snackbarService.openSnackBar(this.responseMessage.messag,"undo");
      this.router.navigate(['/']);
    }, (error)=>{
      if(error.error?.message){
        this.responseMessage= error.error?.messag;
        this.snackbarService.openSnackBar("Qualcosa è andato storto", GlobalConstants.error);
      }
      else{
        this.responseMessage=GlobalConstants.genericError;
      }
    })
  }

}
