import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlShortenerService {

  serviceUrl : string = "";
  constructor(private http : HttpClient) {
    this.serviceUrl = "http://localhost:8080/url/shortener";
  }

  getShortUrl(url : string) {
    return this.http.post<any>(this.serviceUrl, url);
  }
}
