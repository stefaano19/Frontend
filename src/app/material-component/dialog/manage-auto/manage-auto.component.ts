import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AggiungiAutoComponent } from 'src/app/aggiungi-auto/aggiungi-auto.component';
import { AggiungiCasaProduttriceComponent } from 'src/app/aggiungi-casa-produttrice/aggiungi-casa-produttrice.component';
import { Auto } from 'src/app/model/auto';
import { CasaProduttrice } from 'src/app/model/casaProduttrice';
import { AutoService } from 'src/app/service/auto.service';
import { CaseProduttriciService } from 'src/app/services/case-produttrici.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-manage-auto',
  templateUrl: './manage-auto.component.html',
  styleUrls: ['./manage-auto.component.scss']
})
export class ManageAutoComponent implements OnInit {

  displayColoumns: string[] = ['id', 'colore', 'modello','prezzo', 'quantita', 'showroom',  'tipologiaAuto', 'casaproduttrice'];
  dataSource!: MatTableDataSource<Auto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  AutoR: Auto[]=[];
  Auto: Auto=new Auto();
  input: any;

  constructor(private autoService:AutoService,
    private dialog:MatDialog,
    private snackBarService:SnackbarService,
    private router:Router
   ) { }

  ngOnInit(): void {
    this.autoService.getAuto().subscribe(
      (result:any) =>{
        console.log(result);
        this.AutoR=result;
        console.log(this.AutoR);
        this.dataSource=new MatTableDataSource(this.AutoR);
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
    const dialogRef=this.dialog.open(AggiungiAutoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        this.Auto=data;
        console.log(this.Auto);
        console.log("Register appuntamento :", data)
        this.autoService.add(this.Auto).subscribe();
        this.openSnackBar("Auto Registrata", "OK");
        this.autoService.getAuto().subscribe(
          (result:any) =>{
            console.log(result);
            this.AutoR=result;
            console.log(this.AutoR);
            this.dataSource=new MatTableDataSource(this.AutoR);
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
