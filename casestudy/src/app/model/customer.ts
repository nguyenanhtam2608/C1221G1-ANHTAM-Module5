import {CustomerType} from './customer-type';

export interface Customer {
  id: string;
  name: string;
  dayOfBirth: string;
  gender: string;
  nationalId: string;
  phone: string;
  mail: string;
  address: string;
  customerType: CustomerType;
}
