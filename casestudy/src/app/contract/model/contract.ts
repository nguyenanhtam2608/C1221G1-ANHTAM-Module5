import {Facility} from './facility';
import {Customer} from '../../Customer/model/customer';

export interface Contract {
  id: number;
  customer?: Customer;
  facility?: Facility;
  startDate: string;
  endDate: string;
  deposit: number;
  total?: number;
  serviceInclude?: string;
}
