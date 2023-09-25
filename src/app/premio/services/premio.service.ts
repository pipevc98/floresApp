import { Injectable } from '@angular/core';
import { Photo } from '../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor() { }

  getPhoto(){
    return [
      {
        itemImageSrc: 'https://scontent.fgdl3-1.fna.fbcdn.net/v/t39.30808-6/375833045_6980386165307625_3624683956406432929_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeESQFnQUXlExSwBR0IM0jr7vkbv380o7e--Ru_fzSjt724KdG1ZNZT6Fkl2UeNv8sM&_nc_ohc=fIIApnvURWwAX_B1p5E&_nc_ht=scontent.fgdl3-1.fna&oh=00_AfD2Lo_1TyLXLgpXdVA-IDodlORNAEptUhuet6-VRyzZig&oe=65152D7E',
        alt: 'photo Comalon out',
        title: 'photo 1'
      },
      {
        itemImageSrc:  'https://scontent.fgdl3-1.fna.fbcdn.net/v/t39.30808-6/374649473_6980361191976789_3805706228134504627_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=5614bc&_nc_eui2=AeGttZate032YULEsPHz9tBhYtvhp2E7ggxi2-GnYTuCDIRbbsdaQ6K9OagAT5RAblA&_nc_ohc=wMW1X4I44oMAX9cgPl6&_nc_ht=scontent.fgdl3-1.fna&oh=00_AfADpKDySHHavwFygW2O_uAq7FcHwfgxrFt7aIKZ147MyA&oe=65150DD5',
        alt:  'Photo sayulita',
        title: 'photo 2',
      },
      {
        itemImageSrc: 'https://scontent.fgdl3-1.fna.fbcdn.net/v/t1.6435-9/118396434_3565336933479249_5911347233241464945_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEirFszvOM8J_8nsiEqJ4ufHrWLb3RxPtEetYtvdHE-0WQsQBi-V3GFYtZWTLoojmc&_nc_ohc=oMdm0G1eDO0AX_OMX8-&_nc_ht=scontent.fgdl3-1.fna&oh=00_AfBuv7ePfC6x5DNrfBCWhn5ghb-q2vJaIVBXOFfUTyURxw&oe=6538145C',
        alt: 'photo in the car',
        title: 'photo 3'
      }
    ]
  }

  async getImage(){
    return await Promise.resolve(this.getPhoto())
  }
}
