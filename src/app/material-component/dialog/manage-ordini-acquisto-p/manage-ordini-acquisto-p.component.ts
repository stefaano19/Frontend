import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AggiungiOrdineAutoComponent } from 'src/app/aggiungi-ordine-auto/aggiungi-ordine-auto.component';
import { AggiungiOrdineProdottiComponent } from 'src/app/aggiungi-ordine-prodotti/aggiungi-ordine-prodotti.component';
import { Fornitore } from 'src/app/model/fornitore';
import { OrdineAcquisto } from 'src/app/model/ordineAcquisto';
import { OordineAcquistoService } from 'src/app/service/oordine-acquisto.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-manage-ordini-acquisto-p',
  templateUrl: './manage-ordini-acquisto-p.component.html',
  styleUrls: ['./manage-ordini-acquisto-p.component.scss']
})
export class ManageOrdiniAcquistoPComponent implements OnInit {

  
  displayColoumns: string[] = ['id','conforme', 'dataOrdine', 'importo',  'fornitore'];
  dataSource!: MatTableDataSource<OrdineAcquisto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ordini: OrdineAcquisto[]=[];
  ordine: OrdineAcquisto=new OrdineAcquisto();
  input: any;
  fornitore : Fornitore= new Fornitore();

  constructor(private ordineAcquistoService:OordineAcquistoService,
    private dialog:MatDialog,
    private snackBarService:SnackbarService,
    private router:Router
   ) { }

  ngOnInit(): void {
    this.ordineAcquistoService.getOrdiniProdotti().subscribe(
      (result:any) =>{
        console.log(result);
        this.ordini=result;
        console.log(this.ordini);
        this.dataSource=new MatTableDataSource(this.ordini);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    
  }

  handleAddAutoAction(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.data={
      title:'Registrazione Appuntamento'
    }
    const dialogRef=this.dialog.open(AggiungiOrdineProdottiComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        this.ordine=data;
        console.log(this.ordine);
        console.log("Register appuntamento :", data)
        this.ordineAcquistoService.addProdotto(this.ordine).subscribe();
        this.openSnackBar("Prodotto Registrata", "OK");
        this.ordineAcquistoService.getOrdini().subscribe(
          (result:any) =>{
            console.log(result);
            this.ordini=result;
            console.log(this.ordini);
            this.dataSource=new MatTableDataSource(this.ordini);
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
