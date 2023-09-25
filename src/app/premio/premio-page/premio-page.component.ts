import { Component, OnInit, inject } from '@angular/core';
import { PremioService } from '../services/premio.service';
import { Photo } from '../interfaces/photo';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-premio-page',
  templateUrl: './premio-page.component.html',
  styles: [
  ]
})
export class PremioPageComponent implements OnInit{

  private primeNg = inject(PrimeNGConfig)

  public images: Photo[] | undefined

  public responsiveOptions: any[] | undefined;

  private photoService = inject(PremioService)

  ngOnInit(): void {

    this.primeNg.ripple = true;

    this.photoService.getImage().then( photo => {
      this.images = photo
      console.log(this.images);
    }
      );

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];

        
  }




}
