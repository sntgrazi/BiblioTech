import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../config';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private Api_url = environment.apiBackUrl

  constructor( private http: HttpClient) { }

  buscarLivros(): Observable<any> {
    return this.http.get<any>(`${this.Api_url}/livros`);
  }
}
