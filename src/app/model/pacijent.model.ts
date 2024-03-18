import { Dijagnoza } from "./dijagnoza.model";
import { Odeljenje } from './odeljenje.model';

export class Pacijent {
    id!: number; 
    ime! : string; 
    prezime!: string; 
    zdr_osiguranje!: boolean; 
    datum_rodjenja!: Date; 
    dijagnoza!: Dijagnoza; 
    odeljenje!: Odeljenje; 
}