import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpPage } from './help.page';
import {CustomerHelpComponent} from './customer-help/customer-help.component';
import {OrderHelpComponent} from './order-help/order-help.component';
import {CalendarHelpComponent} from './calendar-help/calendar-help.component';
import {SmsHelpComponent} from './sms-help/sms-help.component';



const routes: Routes = [
  {
    path: '',
    component: HelpPage,
    children:[
      {
        path: 'customer-help',
        component: CustomerHelpComponent
      },{
        path: 'order-help',
        component: OrderHelpComponent
      },{
        path: 'calendar-help',
        component: CalendarHelpComponent
      },{
        path: 'sms-help',
        component: SmsHelpComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpPageRoutingModule {}
