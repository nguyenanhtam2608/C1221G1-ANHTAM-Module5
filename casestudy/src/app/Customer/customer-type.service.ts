import {Injectable} from '@angular/core';
import {CustomerType} from './model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeService {
  // private customerTypes: CustomerType[] = [
  //   {
  //     id: 1,
  //     name: 'Diamond'
  //   },
  //   {
  //     id: 2,
  //     name: 'Platinium'
  //   },
  //   {
  //     id: 3,
  //     name: 'Gold'
  //   },
  //   {
  //     id: 4,
  //     name: 'Silver'
  //   },
  //   {
  //     id: 5,
  //     name: 'Member'
  //   }
  // ];

  // public getAllCustomerType(): CustomerType[] {
  //   return this.customerTypes;
  // }

  constructor(private http: HttpClient) {

  }

  public getAllCustomerType(): Observable<CustomerType[]> {
    return this.http.get<CustomerType[]>('http://localhost:3000/customerType').pipe(
      map((response: any) => response));
  }
}
