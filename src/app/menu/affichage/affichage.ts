import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AffichageService } from './affichage.service';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affichage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './affichage.html',
  styleUrl: './affichage.css',
})

 
export class Affichage implements OnInit {

  liste: any[] = [];

  // constructor(private affichageService: AffichageService ) {}

  constructor(private affichageService: AffichageService,  private cdr: ChangeDetectorRef ) {}
 
 
   ngOnInit() {  

     this.charger();
   }  

    charger(): void {

    this.affichageService.getMenu()
      .subscribe(data => {
        this.liste = data;     
        this.cdr.detectChanges();   
        console.log ('this.liste: ' , this.liste)         
      });
      
  }





}










// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { CommonModule } from '@angular/common';
// import { ChangeDetectorRef } from '@angular/core';

// @Component({
//   selector: 'app-affichage',
//   standalone: true,
//  imports: [CommonModule, RouterLink],
//   templateUrl: './affichage.html',
//   styleUrl: './affichage.css',
// })
// export class Affichage {


//   constructor( private cdr: ChangeDetectorRef ) {}



// }
