import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from './todo';
import {Observable} from 'rxjs';

import {environment} from '../environments/environment';
const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(API_URL + '/todo');
  }
  saveProduct(product): Observable<Todo> {
    return this.http.post<Todo>(API_URL + '/todo', product);
  }

  findById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${API_URL}/todo/${id}`);
  }

  updateProduct(id: number, product: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${API_URL}/todo/${id}`, product);
  }

  deleteProduct(id: number): Observable<Todo> {
    return this.http.delete<Todo>(`${API_URL}/todo/${id}`);
  }


}
