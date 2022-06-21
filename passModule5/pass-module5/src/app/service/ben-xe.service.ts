import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenXe} from '../model/ben-xe';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BenXeService {

  constructor(private  http: HttpClient) {
  }


  getAll(request: any): Observable<BenXe[]> {
    const params = request;
    return this.http.get<BenXe[]>('http://localhost:8080/list', {params});
  }

  saveBenXe(benXe): Observable<BenXe> {
    return this.http.post<BenXe>('http://localhost:8080/create', benXe);
  }

  findById(id: string): Observable<BenXe> {
    return this.http.get<BenXe>(`${'http://localhost:8080/find'}${id}`);
  }

  updateBenXe(id: string, benXe: BenXe): Observable<BenXe> {
    return this.http.put<BenXe>(`${'http://localhost:8080/edit'}/${id}`, benXe);
  }

  deleteBenXe(id: string): Observable<BenXe> {
    return this.http.delete<BenXe>(`${'http://localhost:8080/delete'}/${id}`);
  }
}

