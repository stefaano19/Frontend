import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AggiungiAppuntamentoComponent } from 'src/app/aggiungi-appuntamento/aggiungi-appuntamento.component';
import { Appuntamento } from 'src/app/model/appuntamento';
import { Response } from 'src/app/model/response.interface';
import { AppuntamentiService } from 'src/app/services/appuntamenti.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-manage-appuntamenti',
  templateUrl: './manage-appuntamenti.component.html',
  styleUrls: ['./manage-appuntamenti.component.scss']
})
export class ManageAppuntamentiComponent implements OnInit {
  displayColoumns: string[] = ['id','data', 'testDrive','auto'];
  dataSource!: MatTableDataSource<Appuntamento>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  appuntamenti: Appuntamento[]=[];
  appuntamento: Appuntamento=new Appuntamento();
  input: any;

  constructor(private appuntamentiService:AppuntamentiService,
    private dialog:MatDialog,
    private snackBarService:SnackbarService,
    private router:Router
   ) { }

  ngOnInit(): void {
    this.appuntamentiService.getAppuntamenti().subscribe(
      (result:any) =>{
        console.log(result);
        this.appuntamenti=result;
        console.log(this.appuntamenti);
        this.dataSource=new MatTableDataSource(this.appuntamenti);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    
  }
  handleAddAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.data={
      title:'Registrazione Appuntamento'
    }
    const dialogRef=this.dialog.open(AggiungiAppuntamentoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        this.appuntamento=data;
        console.log(this.appuntamento);
        console.log("Register appuntamento :", data)
        this.appuntamentiService.add(this.appuntamento).subscribe();
        this.openSnackBar("Appuntamento Registrato", "OK");
        this.appuntamentiService.getAppuntamenti().subscribe(
          (result:any) =>{
            console.log(result);
            this.appuntamenti=result;
            console.log(this.appuntamenti);
            this.dataSource=new MatTableDataSource(this.appuntamenti);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          }
        );

      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBarService.openSnackBar(message, action);
  }

  HandleEditAction(data:any){
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
