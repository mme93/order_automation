import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from "@angular/common/http";

describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
