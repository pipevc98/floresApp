import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloresRoutingModule } from './flores-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from '../material/material.module';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,

  ],
  imports: [
    CommonModule,
    FloresRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FloresModule { }
