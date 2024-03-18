import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { PacijentDialogComponent } from '../dialog/pacijent-dialog/pacijent-dialog.component';
import { Dijagnoza } from '../model/dijagnoza.model';
import { Odeljenje } from '../model/odeljenje.model';
import { PacijentService } from '../service/pacijent.service';
import { Pacijent } from './../model/pacijent.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pacijent',
  templateUrl: './pacijent.component.html',
  styleUrls: ['./pacijent.component.css']
})
export class PacijentComponent {

  displayedColumns = ['id', 'ime', 'prezime', 'zdr_osiguranje', 'datum_rodjenja', 'odeljenje', 'dijagnoza', 'actions'];

  //dataSource!: Observable<Pacijent[]>;
  dataSource!: MatTableDataSource<Pacijent>;

   today: Date = new Date();
 
   Odeljenje!: Odeljenje;
 
   Dijagnoza!: Dijagnoza;
 
   @ViewChild(MatPaginator)
   paginator!: MatPaginator;
 
   @ViewChild(MatSort)
   sort!: MatSort;
 
   @Input()
   selektovanoOdeljenje!: Odeljenje;
 
   constructor(public PacijentService: PacijentService,
     public dialog: MatDialog) { }
 
   ngOnInit(): void {
     this.loadData();
   }
 
   ngOnChanges(): void {
     if(this.selektovanoOdeljenje.id) {
       this.loadData();
     }
   }
 
   public loadData(){
     //this.dataSource = this.PacijentService.getPacijent(this.selektovanoOdeljenje.id);
      this.PacijentService.getPacijents(this.selektovanoOdeljenje.id).subscribe( data => {
       this.dataSource = new MatTableDataSource(data);
 
       // pretraga po nazivu stranog kljuca
       this.dataSource.filterPredicate = (data: any, filter: string) => {
         const accumulator = (currentTerm: string, key: string) => {
           return key === 'dijagnoza' ? currentTerm + data.dijagnoza.naziv : currentTerm + data[key];
         };
         const dataStr = Object.keys(data).reduce(accumulator, '').toLowerCase();
         const transformedFilter = filter.trim().toLowerCase();
         return dataStr.indexOf(transformedFilter) !== -1;
       };
 
       this.dataSource.sortingDataAccessor = (data:any, property) =>{
         switch(property){
           case 'id': return data[property];
           case 'prezime': return data[property];
           case 'zdr_osiguranje': return data[property];
           case 'datum_rodjenja': return data[property];
           case 'dijagnoza': return data.dijagnoza.naziv.toLocaleLowerCase();
           default: return data[property].toLocaleLowerCase();
         }
       };
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
     });
  }
 
   public openDialog(flag: number, id: number, ime: string, prezime: string, zdr_osiguranje: boolean, datum_rodjenja: Date, odeljenje: Odeljenje, dijagnoza: Dijagnoza) {
     const dialog = this.dialog.open(PacijentDialogComponent, {data: {id: id, ime : ime, prezime : prezime, zdr_osiguranje : zdr_osiguranje, datum_rodjenja : datum_rodjenja, odeljenje : odeljenje, dijagnoza : dijagnoza}});
     dialog.componentInstance.flag = flag;
     dialog.afterClosed().subscribe(result => {
       if (result === 1) {
         this.loadData();
       }
     })
   }
 
   applyFilter(filterValue: string) {
     filterValue.trim();
     filterValue = filterValue.toLowerCase();
     this.dataSource.filter = filterValue;
   }

}
