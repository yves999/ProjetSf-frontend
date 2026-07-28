


import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Affichage } from './menu/affichage/affichage';
import { AffichageSouv } from './menu/affichage-souv/affichage-souv';
import { AffichageSouv2 } from './menu/affichage-souv/affichage-souv2/affichage-souv2';

export const routes: Routes = [
  
   { path: '', component: Menu },    
   { path: 'menu', component: Menu },
   { path: 'affichage', component: Affichage },
   { path: 'affichage-souv', component: AffichageSouv },
   { path: 'affichage-souv2', component: AffichageSouv2 }
   

];








// import { Routes } from '@angular/router';

// export const routes: Routes = [];
