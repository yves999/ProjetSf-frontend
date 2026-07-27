


import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Affichage } from './menu/affichage/affichage';
import { AffichageSouv } from './menu/affichage-souv/affichage-souv';

export const routes: Routes = [
  
   { path: '', component: Menu },    
   { path: 'menu', component: Menu },
   { path: 'affichage', component: Affichage },
   { path: 'affichage-souv', component: AffichageSouv }
   

];








// import { Routes } from '@angular/router';

// export const routes: Routes = [];
