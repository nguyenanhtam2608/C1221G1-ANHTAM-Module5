import {CustomerType} from './customer-type';

export interface Customer {
  id: number;
  name: string;
  dayOfBirth: string;
  gender: number;
  nationalId: string;
  phone: string;
  mail: string;
  address: string;
  customerType: CustomerType;
}
