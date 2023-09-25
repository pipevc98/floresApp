import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './shared/pages/nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path: 'flores',
    loadChildren: ( ) => import('./flores/flores.module').then( m => m.FloresModule)
  },

  {
    path: 'premio',
    loadChildren: () => import('./premio/premio.module').then(m => m.PremioModule)
  },
  {
    path:'',
    redirectTo:'flores',
    pathMatch:'full',
  },
  {
    path: '404',
    component: NopagefoundComponent
  },

  {
    path: '**',
    redirectTo: '404'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
