import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AppuntamentiService } from 'src/app/services/appuntamenti.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-appuntamenti',
  templateUrl: './appuntamenti.component.html',
  styleUrls: ['./appuntamenti.component.scss']
})
export class AppuntamentiComponent implements OnInit {
  displayColoumns: string[] = ['name','edit'];
  dataSource:any;
  constructor(private appuntamentiService:AppuntamentiService,
    private dialog:MatDialog,
    private snackBarService:SnackbarService,
    private router:Router) { }

  ngOnInit(): void {
    this.tableData();
  }
  tableData(){
    this.appuntamentiService.getAppuntamenti().subscribe((response:any)=>{
      this.dataSource=new MatTableDataSource(response);
      console.log(response);
      
    })
  }
  handleAddAction(){
    
  }
  HandleEditAction(adta:any){

  }

}
