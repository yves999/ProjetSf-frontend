
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AffichageSouv2Service } from './affichage-souv2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affichage-souv2',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './affichage-souv2.html',
  styleUrl: './affichage-souv2.css',
})
export class AffichageSouv2 implements OnInit {

  liste: any[] = [];
  jtBackendData: any[] =[];
  id: any;
  idSouv:  any; 
  nom: any;
  prenom: any;
  mel: any;
  rog: any;
  wim: any;
  uso: any;


  souv: any;

 constructor(private affichageSouv2Service: AffichageSouv2Service,  private cdr: ChangeDetectorRef, private router: Router ) {}

  ngOnInit(){
     this.idSouv = localStorage.getItem('idSouv');

      console.log('this.idSouv : ', this.idSouv);

     this.affichageSouv2Service.getSouv(this.idSouv)
        .subscribe(data => {

          this.liste = data;

          console.log ("this.liste_affichageSouv2Service:: ", this.liste )

          if (data.length > 0) {
            this.souv = data[0];
          }

          this.cdr.detectChanges();
      });

    //  this.affichageJt2Service.getJT(this.idJt)
    //   .subscribe(data => {
    //       this.liste = data;     
    //       this.cdr.detectChanges();   
    //       console.log ('this.liste: ' , this.liste);      
          
    //       this.nom = data[0].nom;
    //       this.prenom = data[0].prenom;
    //       console.log ('this.nom: ' , this.nom);
    //       console.log ('this.prenom: ' , this.prenom);   

    //   });    
  }

}































// import { Component,OnInit  } from '@angular/core';

// @Component({
//   selector: 'app-affichage-jt2',
//   imports: [],
//   templateUrl: './affichage-jt2.html',
//   styleUrl: './affichage-jt2.css',
// })
// export class AffichageJt2 implements OnInit {
    
//     id :any;
//     idJt:  any;

//     ngOnInit() {
//       this.idJt = localStorage.getItem('idJt');
//     }


//  }  

































// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-affichage-souv2',
//   imports: [],
//   templateUrl: './affichage-souv2.html',
//   styleUrl: './affichage-souv2.css',
// })
// export class AffichageSouv2 {}
