import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoaiXe} from '../list/loai-xe';
import {map} from 'rxjs/operators';
import {TenNhaXe} from '../list/ten-nha-xe';

@Injectable({
  providedIn: 'root'
})
export class TenNhaXeService {

  constructor(private http: HttpClient) {
  }

  public getAllTenNhaXe(): Observable<TenNhaXe[]> {
    return this.http.get<TenNhaXe[]>('http://localhost:3000/tenNhaXe').pipe(
      map((response: any) => response));
  }
}
