import {Injectable} from '@angular/core';
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

  addSuccess(newAwesome: IAwesome): Observable<IAwesome> {
    return this.http.post<IAwesome>(this.url , newAwesome);
  }

  deleteSuccess(id: number): Observable<IAwesome> {
    return this.http.delete<IAwesome>(this.url + '/' + id);
  }

  updateSuccess(id: number, newAwesome: IAwesome) {
    return this.http.put<IAwesome>(this.url + '/' + id, newAwesome);
  }
}
