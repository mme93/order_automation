import { TestBed } from '@angular/core/testing';

import { SmsService } from './sms.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SmsService', () => {
  let service: SmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
