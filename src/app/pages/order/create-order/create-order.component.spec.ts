import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateOrderComponent } from './create-order.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CreateOrderComponent', () => {
  let component: CreateOrderComponent;
  let fixture: ComponentFixture<CreateOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrderComponent ],
      imports: [IonicModule.forRoot(),HttpClientModule,RouterTestingModule,HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
