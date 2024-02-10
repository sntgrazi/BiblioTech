import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiBookService {

  private Api_url = environment.apiBookUrl
  private Api_key = environment.apiKey

  constructor(private http: HttpClient) { }

  searchBookByISBN(isbn: string): Observable<any> {
    const url = `${this.Api_url}?q=isbn:${isbn}&key=${this.Api_key}`;
    return this.http.get(url);
  }
}
