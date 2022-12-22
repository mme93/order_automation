import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {IonicModule, NavParams} from '@ionic/angular';

import { CreateOrderDialogPage } from './create-order-dialog.page';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {NavParamsMock} from '../../../model/navParams/NavParamsMock';

describe('CreateOrderDialogPage', () => {
  let component: CreateOrderDialogPage;
  let fixture: ComponentFixture<CreateOrderDialogPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrderDialogPage ],
      imports: [IonicModule.forRoot(),HttpClientModule,RouterTestingModule],
      providers: [
        {provide: NavParams, useClass: NavParamsMock},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrderDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
