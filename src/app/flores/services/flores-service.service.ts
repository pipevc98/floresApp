import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class FloresServiceService {

  constructor() { }

  user = {
    name: 'Rubí Díaz',
    perroFav: 'Pirruña'
  }

  login ( name: string, perroFav: string ):any {

    if(name !== this.user.name){

       Swal.fire({
        title: 'Error!',
        text: 'Nombre y Apellido pls',
        icon: 'error',
        confirmButtonText: 'Okey'
      })
      return false
    }

    if(perroFav !== this.user.perroFav){

       Swal.fire({
        title: 'Error!',
        text: 'Tu Perro favorito es pirruña',
        icon: 'error',
        confirmButtonText: 'Es cierto'
      })
      return false
    }


    if(name == this.user.name && perroFav == this.user.perroFav) {
      return true
    }
     

  }

  
}
