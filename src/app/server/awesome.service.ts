import { Injectable } from '@angular/core';
import {IAwesome} from '../awesome/iawesome';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {

  url = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IAwesome[]> {
    return this.http.get<IAwesome[]>(this.url);
  }
  findById(id: number): Observable<IAwesome> {
    return this.http.get<IAwesome>(this.url + '/' + id);
  }
}
