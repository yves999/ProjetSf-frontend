


import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Affichage } from './menu/affichage/affichage';

export const routes: Routes = [
  
   { path: '', component: Menu },    
   { path: 'menu', component: Menu },
   { path: 'affichage', component: Affichage }

];








// import { Routes } from '@angular/router';

// export const routes: Routes = [];
