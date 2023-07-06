import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../shared/material-module';
import { ViewBillProductsComponent } from './dialog/view-bill-products/view-bill-products.component';
import { ManageAppuntamentiComponent } from './manage-appuntamenti/manage-appuntamenti.component';
import { AppuntamentiComponent } from './dialog/appuntamenti/appuntamenti.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ManageFornitoriComponent } from './dialog/manage-fornitori/manage-fornitori.component';
import { ManageCaseProduttriciComponent } from './dialog/manage-case-produttrici/manage-case-produttrici.component';
import { ManageAutoComponent } from './dialog/manage-auto/manage-auto.component';
import { ManageProdottiComponent } from './dialog/manage-prodotti/manage-prodotti.component';
import { ManageOrdiniAcquistoComponent } from './dialog/manage-ordini-acquisto/manage-ordini-acquisto.component';
import { ManageOrdiniAcquistoPComponent } from './dialog/manage-ordini-acquisto-p/manage-ordini-acquisto-p.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [],
  declarations: [
    ViewBillProductsComponent,
    ManageAppuntamentiComponent,
    AppuntamentiComponent,
    ManageFornitoriComponent,
    ManageCaseProduttriciComponent,
    ManageAutoComponent,
    ManageProdottiComponent,
    ManageOrdiniAcquistoComponent,
    ManageOrdiniAcquistoPComponent,
  ]
})
export class MaterialComponentsModule {}
