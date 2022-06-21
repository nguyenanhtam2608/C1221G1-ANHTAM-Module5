import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaiXe} from '../model/loai-xe';
import {map} from 'rxjs/operators';
import {TenNhaXe} from '../model/ten-nha-xe';

@Injectable({
  providedIn: 'root'
})
export class TenNhaXeService {

  constructor(private http: HttpClient) {
  }

  public getAllTenNhaXe(): Observable<TenNhaXe[]> {
    return this.http.get<TenNhaXe[]>('http://localhost:8080/tenNhaXe').pipe(
      map((response: any) => response));
  }
}
