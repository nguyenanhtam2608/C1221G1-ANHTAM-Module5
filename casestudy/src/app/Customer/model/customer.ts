import {CustomerType} from './customer-type';

export interface Customer {
  id: string;
  name: string;
  dayOfBirth: string;
  gender: number;
  nationalId: string;
  phone: string;
  mail: string;
  address: string;
  salary: string;
  customerType: CustomerType;
}
