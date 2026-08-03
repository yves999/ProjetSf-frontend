


import { Routes } from '@angular/router';
import { Menu } from './menu/menu';
import { Affichage } from './menu/affichage/affichage';
import { AffichageSouv } from './menu/affichage-souv/affichage-souv';
import { AffichageSouv2 } from './menu/affichage-souv/affichage-souv2/affichage-souv2';
import { GestionSouv } from './menu/gestion-souv/gestion-souv';
import { Louis14 } from './menu/louis14/louis14';
import { Charlemagne } from './menu/charlemagne/charlemagne';

export const routes: Routes = [
  
   { path: '', component: Menu },    
   { path: 'menu', component: Menu },
   { path: 'affichage', component: Affichage },
   { path: 'affichage-souv', component: AffichageSouv },
   { path: 'affichage-souv2', component: AffichageSouv2 },
   { path: 'gestion-souv', component: GestionSouv },
   { path: 'louis14', component: Louis14 },
   { path: 'charlemagne', component: Charlemagne }

];








// import { Routes } from '@angular/router';

// export const routes: Routes = [];
