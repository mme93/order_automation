import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateCustomerComponent } from './create-customer.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('CreateCustomerComponent', () => {
  let component: CreateCustomerComponent;
  let fixture: ComponentFixture<CreateCustomerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCustomerComponent ],
      imports: [IonicModule.forRoot(),HttpClientModule,RouterTestingModule,FormsModule,ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
