import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AggiungiAutoComponent } from 'src/app/aggiungi-auto/aggiungi-auto.component';
import { AggiungiProdottoComponent } from 'src/app/aggiungi-prodotto/aggiungi-prodotto.component';
import { Auto } from 'src/app/model/auto';
import { Prodotto } from 'src/app/model/prodotto';
import { AutoService } from 'src/app/service/auto.service';
import { ProdottiService } from 'src/app/services/prodotti.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-manage-prodotti',
  templateUrl: './manage-prodotti.component.html',
  styleUrls: ['./manage-prodotti.component.scss']
})
export class ManageProdottiComponent implements OnInit {
  displayColoumns: string[] = ['id','prezzo', 'marca', 'nome',  'tipologia',  'disponibilita', 'fornitore'];
  dataSource!: MatTableDataSource<Prodotto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  Prodotti: Prodotto[]=[];
  Prodotto: Prodotto=new Prodotto();
  input: any;

  constructor(private prodottoService:ProdottiService,
    private dialog:MatDialog,
    private snackBarService:SnackbarService,
    private router:Router
   ) { }

  ngOnInit(): void {
    this.prodottoService.getProdotti().subscribe(
      (result:any) =>{
        console.log(result);
        this.Prodotti=result;
        console.log(this.Prodotti);
        this.dataSource=new MatTableDataSource(this.Prodotti);
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
    const dialogRef=this.dialog.open(AggiungiProdottoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(data=>{
      if(data){
        this.Prodotto=data;
        console.log(this.Prodotto);
        console.log("Register appuntamento :", data)
        this.prodottoService.add(this.Prodotto).subscribe();
        this.openSnackBar("Prodotto Registrata", "OK");
        this.prodottoService.getProdotti().subscribe(
          (result:any) =>{
            console.log(result);
            this.Prodotti=result;
            console.log(this.Prodotti);
            this.dataSource=new MatTableDataSource(this.Prodotti);
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
