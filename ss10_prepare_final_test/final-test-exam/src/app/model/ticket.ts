import {Garage} from './garage';

export interface Ticket {
  id: number;
  price: number;
  startPosition: string;
  endPosition: string;
  startDate: string;
  time: string;
  garage: Garage;
  amount: number;
}
