import { TestBed } from '@angular/core/testing';

import { SmsService } from './sms.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('SmsService', () => {
  let service: SmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(SmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
