import { Injectable} from "@angular/core";

export interface Menu{
    state:string;
    name:string;
    type:string;
    icon:string;
}

const MENUITEMS = [
    {state:'dashboard', name:"Dashboard", type:"link", icon:'dashboard'},
    {state:'appuntamenti', name:"Appuntamenti", type:"link", icon:'event'},
    {state:'fornitori', name:"Fornitori", type:"link", icon:'contact_phone'},
    {state:'caseProduttrici', name:"Case Produttrici", type:"link", icon:'factory'},
    {state:'auto', name:"Auto", type:"link", icon:'directions_car'},
    {state:'ordini', name:"Ordini", type:"link", icon:'list_alt'},
    {state:'logout', name:"Logout", type:"link", icon:'logout'}
]
@Injectable()
export class MenuItems {
    getMenuItem():Menu[]{
        return MENUITEMS
    }
}
