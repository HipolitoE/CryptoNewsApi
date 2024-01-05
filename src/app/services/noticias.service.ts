import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private apiUrl = 'https://crypto-news34.p.rapidapi.com/news'; // Reemplaza con la URL real de la API
  private apiKey = '21d0a2ba0dmsh579e85582fc2357p1e47e3jsna6a3d4a526fa'


  constructor(private http: HttpClient) { }

  getNoticias(): Observable<any> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'crypto-news34.p.rapidapi.com'
    });
    const options = { headers: headers };

    return this.http.get(this.apiUrl, options);
  }
}