import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {IonicModule, NavParams} from '@ionic/angular';

import { EventdetailsPage } from './eventdetails.page';
import {RouterTestingModule} from '@angular/router/testing';
import {NavParamsMock} from '../../../shared/model/navParams/NavParamsMock';

describe('EventdetailsPage', () => {
  let component: EventdetailsPage;
  let fixture: ComponentFixture<EventdetailsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdetailsPage ],
      imports: [IonicModule.forRoot(),RouterTestingModule],
      providers: [
        {provide: NavParams, useClass: NavParamsMock},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EventdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
