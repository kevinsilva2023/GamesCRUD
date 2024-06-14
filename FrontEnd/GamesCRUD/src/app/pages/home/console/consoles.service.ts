import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consoles } from './consoles';

@Injectable({
  providedIn: 'root'
})

export class ConsoleService {

  private readonly  API =  'http://localhost:3000/consoles'

  constructor( private http: HttpClient ) { }

  cadastrar(console: Consoles): Observable<Consoles> {
    return this.http.post<Consoles>(this.API, console)
  }
}