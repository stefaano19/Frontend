import { Auto } from "./auto";
import { Prodotto } from "./prodotto";

export class OrdineAcquisto{;
    conforme?:boolean;
    dataOrdine?:Date;
    cp_C?:Number;
    cp_F?:Number;
    auto?:Auto[];
    prodotti?:Prodotto[];
}