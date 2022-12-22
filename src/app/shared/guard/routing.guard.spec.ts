import { TestBed } from '@angular/core/testing';

import { RoutingGuard } from './routing.guard';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('RoutingGuard', () => {
  let guard: RoutingGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,RouterTestingModule]
    });
    guard = TestBed.inject(RoutingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
