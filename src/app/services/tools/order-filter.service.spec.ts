import { TestBed } from '@angular/core/testing';

import { OrderFilterService } from './order-filter.service';

describe('OrderFilterService', () => {
  let service: OrderFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
