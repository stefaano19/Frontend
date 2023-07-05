import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AggiungiCasaProduttriceComponent } from 'src/app/aggiungi-casa-produttrice/aggiungi-casa-produttrice.component';
import { AggiungiFornitoreComponent } from 'src/app/aggiungi-fornitore/aggiungi-fornitore.component';
import { Appuntamento } from 'src/app/model/appuntamento';
import { CasaProduttrice } from 'src/app/model/casaProduttrice';
import { Fornitore } from 'src/app/model/fornitore';
import { CaseProduttriciService } from 'src/app/services/case-produttrici.service';
import { FornitoreService } from 'src/app/services/fornitore.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-manage-case-produttrici',
  templateUrl: './manage-case-produttrici.component.html',
  styleUrls: ['./manage-case-produttrici.component.scss']
})
export class ManageCaseProduttriciComponent implements OnInit {

  displayColoumns: string[] = ['partitaIva', 'marchio', 'ragioneSociale','sede'];
  dataSource!: MatTableDataSource<CasaProduttrice>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  caseProduttrici: CasaProduttrice[]=[];
  casaProduttrice: CasaProduttrice=new CasaProduttrice();
  input: any;

  constructor(private casaProduttriceService:CaseProduttriciService,
    private dialog:MatDialog,
    private snackBarService:SnackbarService,
    private router:Router
   ) { }

  ngOnInit(): void {
    this.casaProduttriceService.getCase().subscribe(
      (result:any) =>{
        console.log(result);
        this.caseProduttrici=result;
        console.log(this.caseProduttrici);
        this.dataSource=new MatTableDataSource(this.caseProduttrici);
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
    const dialogRef=this.dialog.open(AggiungiCasaProduttriceComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        this.casaProduttrice=data;
        console.log(this.caseProduttrici);
        console.log("Register appuntamento :", data)
        this.casaProduttriceService.add(this.casaProduttrice).subscribe();
        this.openSnackBar("Casa Produttrice Registrata", "OK");
        this.casaProduttriceService.getCase().subscribe(
          (result:any) =>{
            console.log(result);
            this.caseProduttrici=result;
            console.log(this.caseProduttrici);
            this.dataSource=new MatTableDataSource(this.caseProduttrici);
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
