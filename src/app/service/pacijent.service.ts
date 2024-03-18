import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Pacijent } from '../model/pacijent.model';

@Injectable()
export class PacijentService {

  private readonly API_URL = 'http://localhost:8082/pacijent/';

  private readonly API_URL_P = 'http://localhost:8082/pacijentiZaOdeljenje/';

  dataChange: BehaviorSubject<Pacijent[]> = new BehaviorSubject<Pacijent[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllPacijents(): Observable<Pacijent[]> {
    this.httpClient.get<Pacijent[]>(this.API_URL).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public getPacijents(idOdeljenje: number): Observable<Pacijent[]> {
    this.httpClient.get<Pacijent[]>(this.API_URL_P + idOdeljenje).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public addPacijent(pacijent: Pacijent): void {
    this.httpClient.post(this.API_URL, pacijent).subscribe();
  }

  public updatePacijent(pacijent: Pacijent): void {
    this.httpClient.put(this.API_URL + pacijent.id, pacijent).subscribe();
  }

  public deletePacijent(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe();
  }
}