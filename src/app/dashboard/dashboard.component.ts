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
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	nome=localStorage.getItem('email');

 displayColoumns: string[] = ['id', 'colore', 'modello','prezzo', 'quantita', 'showroom',  'tipologiaAuto', 'casaproduttrice'];
  dataSource!: MatTableDataSource<Auto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  AutoR: Auto[]=[];
  
  ngAfterViewInit(): void {
    this.autoService.getAutoDaOrdinare().subscribe(
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
	constructor(private dashboardService:DashboardService,
		private autoService:AutoService,
		private snackBarService:SnackbarService,
		) {
	}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
	

}
