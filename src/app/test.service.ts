import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getAbbreviations(){
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    return this.http.get('http://localhost:8080/abbreviations', { headers, responseType: 'json'});
  }

}
