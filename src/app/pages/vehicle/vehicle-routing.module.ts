import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'motorbike',
    pathMatch: 'full'
  },
  {
    path: 'motorbike',
    loadChildren: () => import('./motorbike/motorbike.module').then( m => m.MotorbikePageModule)
  },
  {
    path: 'registrationdocument',
    loadChildren: () => import('./registrationdocument/registrationdocument.module').then( m => m.RegistrationdocumentPageModule)
  },
  {
    path: 'car',
    loadChildren: () => import('./car/car.module').then( m => m.CarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiclePageRoutingModule {}
