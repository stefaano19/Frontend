import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AggiungiAppuntamentoComponent } from 'src/app/aggiungi-appuntamento/aggiungi-appuntamento.component';
import { AggiungiFornitoreComponent } from 'src/app/aggiungi-fornitore/aggiungi-fornitore.component';
import { Appuntamento } from 'src/app/model/appuntamento';
import { Fornitore } from 'src/app/model/fornitore';
import { AppuntamentiService } from 'src/app/services/appuntamenti.service';
import { FornitoreService } from 'src/app/services/fornitore.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-manage-fornitori',
  templateUrl: './manage-fornitori.component.html',
  styleUrls: ['./manage-fornitori.component.scss']
})
export class ManageFornitoriComponent implements OnInit {

  displayColoumns: string[] = ['partitaIva', 'ragioneSociale','sede'];
  dataSource!: MatTableDataSource<Appuntamento>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  fornitori: Fornitore[]=[];
  fornitore: Fornitore=new Fornitore();
  input: any;

  constructor(private fornitoreService:FornitoreService,
    private dialog:MatDialog,
    private snackBarService:SnackbarService,
    private router:Router
   ) { }

  ngOnInit(): void {
    this.fornitoreService.getFornitori().subscribe(
      (result:any) =>{
        console.log(result);
        this.fornitori=result;
        console.log(this.fornitori);
        this.dataSource=new MatTableDataSource(this.fornitori);
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
    const dialogRef=this.dialog.open(AggiungiFornitoreComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        this.fornitore=data;
        console.log(this.fornitore);
        console.log("Register appuntamento :", data)
        this.fornitoreService.add(this.fornitore).subscribe();
        this.openSnackBar("Appuntamento Registrato", "OK");
        this.fornitoreService.getFornitori().subscribe(
          (result:any) =>{
            console.log(result);
            this.fornitori=result;
            console.log(this.fornitori);
            this.dataSource=new MatTableDataSource(this.fornitori);
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
