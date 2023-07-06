import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { SnackbarService } from '../services/snackbar.service';
import { DashboardService } from '../services/dashboard.service';
import { AutoService } from '../service/auto.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AggiungiAutoComponent } from '../aggiungi-auto/aggiungi-auto.component';
import { Auto } from '../model/auto';
import { Prodotto } from '../model/prodotto';
import { ProdottiService } from '../services/prodotti.service';
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	nome=localStorage.getItem('email');
 displayColoumns2: string[] = ['id','prezzo', 'marca', 'nome',  'tipologia',  'disponibilita', 'fornitore'];
 displayColoumns: string[] = ['id', 'colore', 'modello','prezzo', 'quantita', 'showroom',  'tipologiaAuto', 'casaproduttrice'];
  dataSource1!: MatTableDataSource<Auto>;
  dataSource2!: MatTableDataSource<Prodotto>;
  showPassword: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  AutoR: Auto[]=[];
  Prodotti: Prodotto[]=[];
  
  ngAfterViewInit(): void {
    this.autoService.getAutoDaOrdinare().subscribe(
      (result:any) =>{
        console.log(result);
        this.AutoR=result;
        console.log(this.AutoR);
        this.dataSource1=new MatTableDataSource(this.AutoR);
        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
      }
    );
    this.prodottoService.getProdottiDaOrdinare().subscribe(
      (result:any) =>{
        console.log(result);
        this.Prodotti=result;
        console.log(this.AutoR);
        this.dataSource2=new MatTableDataSource(this.Prodotti);
        this.dataSource2.paginator = this.paginator;
        this.dataSource2.sort = this.sort;
      }
    );
  }
	constructor(private dashboardService:DashboardService,
    private prodottoService:ProdottiService,
		private autoService:AutoService,
		private snackBarService:SnackbarService,
		) {
	}


  applyFilter1(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }

  applyFilter2(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource2.paginator) {
      this.dataSource2.paginator.firstPage();
    }
  }
	

}
