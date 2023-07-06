import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageAppuntamentiComponent } from './manage-appuntamenti/manage-appuntamenti.component';
import { ManageFornitoriComponent } from './dialog/manage-fornitori/manage-fornitori.component';
import { ManageCaseProduttriciComponent } from './dialog/manage-case-produttrici/manage-case-produttrici.component';
import { ManageAutoComponent } from './dialog/manage-auto/manage-auto.component';
import { HomeComponent } from '../home/home.component';
import { ManageProdottiComponent } from './dialog/manage-prodotti/manage-prodotti.component';
import { ManageOrdiniAcquistoComponent } from './dialog/manage-ordini-acquisto/manage-ordini-acquisto.component';
import { ManageOrdiniAcquistoPComponent } from './dialog/manage-ordini-acquisto-p/manage-ordini-acquisto-p.component';


export const MaterialRoutes: Routes = [
    {
        path:'appuntamenti',
        component:ManageAppuntamentiComponent,
    },
    {
        path:'fornitori',
        component:ManageFornitoriComponent,
    },
    {
        path:'caseProduttrici',
        component:ManageCaseProduttriciComponent,
    },
    {
        path:'auto',
        component:ManageAutoComponent,
    },
    {
        path:'prodotti',
        component:ManageProdottiComponent,
    },
    {
        path:'ordiniAuto',
        component:ManageOrdiniAcquistoComponent,
    },
    {
        path:'ordiniProdotti',
        component:ManageOrdiniAcquistoPComponent,
    },
    {
        path:'logout',
        redirectTo:'http://localhost:4200',
    }
];
