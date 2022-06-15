import {FacilityType} from '../../facility/model/facility-type';
import {RentType} from '../../facility/model/rent-type';



export interface Facility {
  id: number;
  name: string;
  code?: string;
  image?: string;
  rentType?: RentType;
  rentalFee?: number;
  floorSquare?: number;
  maximumPeople?: number;
  roomStandard?: string;
  description?: string;
  poolSquare?: number;
  numberFloor?: number;
  facilityType?: FacilityType;
  freeServiceInclude?: string;
}
