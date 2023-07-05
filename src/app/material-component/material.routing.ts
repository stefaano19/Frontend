import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageAppuntamentiComponent } from './manage-appuntamenti/manage-appuntamenti.component';
import { ManageFornitoriComponent } from './dialog/manage-fornitori/manage-fornitori.component';
import { ManageCaseProduttriciComponent } from './dialog/manage-case-produttrici/manage-case-produttrici.component';
import { ManageAutoComponent } from './dialog/manage-auto/manage-auto.component';
import { HomeComponent } from '../home/home.component';


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
        path:'logout',
        redirectTo:'http://localhost:4200',
    }
];
