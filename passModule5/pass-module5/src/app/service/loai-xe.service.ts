import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoaiXe} from '../list/loai-xe';

@Injectable({
  providedIn: 'root'
})
export class LoaiXeService {

  constructor(private http: HttpClient) {
  }

  public getAllLoaiXe(): Observable<LoaiXe[]> {
    return this.http.get<LoaiXe[]>('http://localhost:3000/loaiXe').pipe(
      map((response: any) => response));
  }

}
