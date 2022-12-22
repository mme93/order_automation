import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderSettingsComponent } from './order-settings.component';
import {HttpClientModule} from '@angular/common/http';

describe('OrderSettingsComponent', () => {
  let component: OrderSettingsComponent;
  let fixture: ComponentFixture<OrderSettingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSettingsComponent ],
      imports: [IonicModule.forRoot(),HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
