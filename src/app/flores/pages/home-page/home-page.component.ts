import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FloresServiceService } from '../../services/flores-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent {

  private fb = inject(FormBuilder);

  private floresAuth = inject(FloresServiceService)

  private router = inject(Router);

  public myForm: FormGroup = this.fb.group({
    nombre:    ['', [Validators.required]],
    perroFav: ['', [Validators.required]]
  });

  


  login() {
   const {nombre, perroFav} = this.myForm.value;

   const auth = this.floresAuth.login(nombre, perroFav);

   if(auth === true ){
    console.log('thick1111')
    this.router.navigateByUrl('/premio')
   }

   
  }
}
