import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AffichageSouvService } from './affichage-souv.service';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-affichage-souv',
  imports: [CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './affichage-souv.html',
  styleUrl: './affichage-souv.css',
})

export class AffichageSouv implements OnInit {

  liste: any[] = [];
  jtBackendData: any[] =[];
  id :any;
  idSouv:  any;

  souvForm = new UntypedFormGroup({
    'souvSelect': new UntypedFormControl('', Validators.required),
    'selectedSouv': new UntypedFormControl('', Validators.required)
  });


 constructor(private affichageSouvService: AffichageSouvService,  private cdr: ChangeDetectorRef,private router: Router ) {}

  ngOnInit(){

     this.affichageSouvService.getSouv().subscribe(data => {
        this.liste = data;     
        this.cdr.detectChanges();   
        console.log ('this.listeAffichageSouv: ' , this.liste)         
     });    

  }  // ngOnInit

  getSelectedSouv(event:any){
     this.souvForm.controls['selectedSouv'].setValue(event.target.value); 
  } // getSelectedSouv

  onAnnuler() {
      this.souvForm.reset();
      this.affichageSouvService.getSouv().subscribe(data => {
        this.liste = data;     
        this.cdr.detectChanges();   
        console.log ('this.liste: ' , this.liste);
        this.souvForm.controls['souvSelect'].setValue("", {onlySelf: true});   
        //  this.souvForm.controls['souvSelect'].setValue("");
      });   
  }  //onAnnuler

    onGo() {              

              
          if ((this.souvForm.controls['selectedSouv'].value ===  null) || (this.souvForm.controls['selectedSouv'].value ===  '') ) { 
                alert( " Souverain manquant");
                this.onAnnuler();
                return;
          }

            console.log('this.souvForm.controls[selectedSouv].value : ', this.souvForm.controls['selectedSouv'].value);

            const id = this.souvForm.controls['selectedSouv'].value;

            console.log('id sélectionné : ', id);

            localStorage.setItem('idSouv', id);

            this.router.navigate(['/affichage-souv2']);

    } // onGo


}








































// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-affichage-souv',
//   imports: [],
//   templateUrl: './affichage-souv.html',
//   styleUrl: './affichage-souv.css',
// })
// export class AffichageSouv {}
