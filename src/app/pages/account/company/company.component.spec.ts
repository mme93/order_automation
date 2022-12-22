import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {CompanyComponent} from './company.component';
import {HttpClientModule} from '@angular/common/http';
import {CompanyService} from '../../../shared/services/http/company/company.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CompanyComponent', () => {
  let component: CompanyComponent;
  let fixture: ComponentFixture<CompanyComponent>;

  beforeEach(waitForAsync(() => {
    localStorage.setItem('company','');
    TestBed.configureTestingModule({
      declarations: [CompanyComponent],
      imports: [IonicModule.forRoot(), HttpClientModule,HttpClientTestingModule],
      providers: [CompanyService]
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
