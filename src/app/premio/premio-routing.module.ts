import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremioPageComponent } from './premio-page/premio-page.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {path: 'flores-amarillas', component: PremioPageComponent},
      {path: '**', redirectTo: 'flores-amarillas'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PremioRoutingModule { }
