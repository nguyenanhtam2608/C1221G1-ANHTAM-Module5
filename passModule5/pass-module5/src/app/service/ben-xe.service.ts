import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BenXe} from '../model/ben-xe';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BenXeService {

  constructor(private  http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getAll(request: any): Observable<BenXe[]> {
    const params = request;
    return this.http.get<BenXe[]>('http://localhost:8080/list', {params});
  }

  saveBenXe(benXe: BenXe): Observable<BenXe> {
    // @ts-ignore
    return this.http.post<BenXe>('http://localhost:8080/create', benXe, this.httpOptions);
  }

  findById(id: string): Observable<BenXe> {
    return this.http.get<BenXe>(`${'http://localhost:8080/find'}/${id}`);
  }

  updateBenXe(id: string, benXe: BenXe): Observable<BenXe> {
    return this.http.patch<BenXe>(`${'http://localhost:8080/update'}/${id}`, benXe);
  }

  deleteBenXe(id: string): Observable<BenXe> {
    return this.http.delete<BenXe>(`${'http://localhost:8080/delete'}/${id}`);
  }

  searchBenXeDiemDen(request): Observable<BenXe[]> {
    const params = request;
    return this.http.get<BenXe[]>('http://localhost:8080/list', {params});

  }
}

