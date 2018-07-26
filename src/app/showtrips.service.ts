import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weekendtrip } from './weekendtrip';

@Injectable({
  providedIn: 'root'
})
export class ShowtripsService {
  baseUrl = 'http://localhost:3000/weekendtrips';
  constructor(private http: HttpClient) { }
    findAll(): Observable<Weekendtrip[]> {
      return this.http.get<Weekendtrip[]>(this.baseUrl);
  }
}
