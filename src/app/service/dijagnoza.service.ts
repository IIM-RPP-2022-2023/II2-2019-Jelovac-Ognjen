import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Dijagnoza } from "../model/dijagnoza.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class DijagnozaService{

  private readonly API_URL = 'http://localhost:8082/dijagnoza/';

  dataChange: BehaviorSubject<Dijagnoza[]> = new BehaviorSubject<Dijagnoza[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllDijagnoza(): Observable<Dijagnoza[]> {
    this.httpClient.get<Dijagnoza[]>(this.API_URL).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + 'AAAAAAAAAAAAAAAAA' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public addDijagnoza(dijagnoza: Dijagnoza): void {
    this.httpClient.post(this.API_URL, dijagnoza).subscribe();
  }

  public updateDijagnoza(dijagnoza: Dijagnoza): void {
    this.httpClient.put(this.API_URL + dijagnoza.id, dijagnoza).subscribe();
  }

  public deleteDijagnoza(dijagnoza: Dijagnoza): void {
    this.httpClient.delete(this.API_URL + dijagnoza.id).subscribe();
  }

}