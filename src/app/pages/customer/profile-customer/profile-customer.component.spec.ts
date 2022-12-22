import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileCustomerComponent } from './profile-customer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ProfileCustomerComponent', () => {
  let component: ProfileCustomerComponent;
  let fixture: ComponentFixture<ProfileCustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCustomerComponent ],
      imports: [IonicModule.forRoot(),RouterTestingModule,HttpClientModule,FormsModule,ReactiveFormsModule,HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
