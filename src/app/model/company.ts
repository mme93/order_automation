import {User} from './user';

export interface Company{
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  street: string;
  postalCode: string;
  callNumber: string;
  sector: string;
  userDtoList: User[];
}
