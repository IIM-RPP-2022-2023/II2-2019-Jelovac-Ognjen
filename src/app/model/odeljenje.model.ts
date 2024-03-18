import { Bolnica } from "./bolnica.model";

export class Odeljenje {
    id!: number; 
    naziv!: string; 
    lokacija! : string; 
    bolnica! : Bolnica; 

}