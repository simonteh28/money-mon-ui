import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private getHeader() {
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return header;
  }
}
