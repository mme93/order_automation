import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

export interface OrderElement {
  position: number;
  refNr: string;
  editorId: string;
  callnumber: string;
  firstName: string;
  lastName: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrderFilterService {

  constructor() {
  }

  filterOrder(query: string, dataSource: MatTableDataSource<OrderElement>) {
    if (query.length === 0) {
      return dataSource.filteredData;
    }
    const queryArray: string[] = query.split(' ').filter(value => value.length !== 0);
    queryArray.forEach(value => {
      dataSource.filter=value;
      dataSource=new MatTableDataSource<OrderElement>(dataSource.filteredData);
    });
    return dataSource.filteredData;
  }

  buildOrder(subscription: Subscription) {

  }
}
