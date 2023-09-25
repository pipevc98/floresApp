import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PremioRoutingModule } from './premio-routing.module';
import { PremioPageComponent } from './premio-page/premio-page.component';
import { LayoutPageComponent } from './layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    PremioPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    PremioRoutingModule,
    MaterialModule
  ]
})
export class PremioModule { }
