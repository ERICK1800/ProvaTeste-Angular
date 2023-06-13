import { Anuncio } from './anuncio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  url = "http://localhost:3000/anuncios";

  constructor(private http: HttpClient) { }

  getAnuncio(): Observable<Anuncio[]>{
    return this.http.get<Anuncio[]>(this.url);
  }

  save(anuncio: Anuncio): Observable<Anuncio>{
    return this.http.post<Anuncio>(this.url, anuncio);
  }
}
