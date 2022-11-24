import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SettingsPage} from './settings.page';
import {OrderSettingsComponent} from './order-settings/order-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage,
    children: [
      {
        path: 'order',
        component: OrderSettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {
}
