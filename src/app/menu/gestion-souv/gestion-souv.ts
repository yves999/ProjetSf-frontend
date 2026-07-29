import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GestionSouvService } from './gestion-souv.service';
import { ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-souv',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],

//   imports: [
//     CommonModule,    
//     ReactiveFormsModule
//   ],
  templateUrl: './gestion-souv.html',
  styleUrl: './gestion-souv.css'
})

export class GestionSouv implements OnInit {

  liste: any[] = [];
  souvBackendData: any[] =[];
  id :any;
  idSouv:  any;
  nom = '';
  prenom = '';

  souvForm = new UntypedFormGroup({
    'souvSelect': new UntypedFormControl('', Validators.required),
    'selectedSouv': new UntypedFormControl('', Validators.required),
    'selectedNom': new UntypedFormControl('', Validators.required),
    'selectedPrenom': new UntypedFormControl('', Validators.required),
    'selectedDate_naissance': new UntypedFormControl('', Validators.required),
    'selectedDate_mort': new UntypedFormControl('', Validators.required),
    'selectedDate_debut_regne': new UntypedFormControl('', Validators.required),
    'selectedDate_fin_regne': new UntypedFormControl('', Validators.required),
    'selectedFaits_marquants': new UntypedFormControl('', Validators.required)
  });


 constructor(private gestionSouvService: GestionSouvService,  private cdr: ChangeDetectorRef,private router: Router ) {}

 
 ngOnInit(){

     this.gestionSouvService.getGestionSouv().subscribe(data => {
        this.liste = data;     
        this.cdr.detectChanges();   
        console.log ('this.liste_getGestionSouv: ' , this.liste)         
     });    

  }  // ngOnInit

  getSelectedSouv(event:any){

      this.souvForm.controls['selectedSouv'].setValue(event.target.value); 

      const id = this.souvForm.controls['selectedSouv'].value;

      console.log('id sélectionné : ', id);
      
      // this.gestionJtService.getGestionJt2(id).subscribe(data => {
      //         this.liste = data;     
      //         this.cdr.detectChanges();   
      //         console.log ('this.liste: ', this.liste);
      //         this.jtForm.controls['selectedNom'].setValue(this.liste[0].nom); 
      //         this.jtForm.controls['selectedPrenom'].setValue(this.liste[0].prenom);              
      // }); 

       this.gestionSouvService.getGestionSouv2(id).subscribe(data => {

        console.log('data : ', data);

        if (data.length > 0) {

              this.souvForm.controls['selectedNom'].setValue(data[0].nom); 
              this.souvForm.controls['selectedPrenom'].setValue(data[0].prenom); 

              this.souvForm.controls['selectedDate_naissance'].setValue(
                    data[0].date_naissance
                        ? data[0].date_naissance.substring(0, 10)
                        : ''
                );

              this.souvForm.controls['selectedDate_mort'].setValue(
                    data[0].date_mort
                        ? data[0].date_mort.substring(0, 10)
                        : ''
               );

               this.souvForm.controls['selectedDate_debut_regne'].setValue(
                    data[0].date_debut_regne
                        ? data[0].date_debut_regne.substring(0, 10)
                        : ''
               );

                this.souvForm.controls['selectedDate_fin_regne'].setValue(
                    data[0].date_fin_regne
                        ? data[0].date_fin_regne.substring(0, 10)
                        : ''
                );

                this.souvForm.controls['selectedFaits_marquants'].setValue(data[0].faits_marquants)            



            //   this.souvForm.controls['selectedDate_naissance'].setValue(data[0].date_naissance); 
            //   this.souvForm.controls['selectedDate_mort'].setValue(data[0].date_mort);              
            //   this.souvForm.controls['selectedDate_debut_regne'].setValue(data[0].date_debut_regne); 
            //   this.souvForm.controls['selectedDate_fin_regne'].setValue(data[0].date_fin_regne);
            //   this.souvForm.controls['selectedFaits_marquants'].setValue(data[0].faits_marquants)

        }

    });



  } // getSelectedSouv


  onCreation() {   

     if ((this.souvForm.controls['selectedNom'].value ===  null) || (this.souvForm.controls['selectedNom'].value ===  '') ) { 
                alert( "Nom manquant");
                // this.onAnnuler();
                return;
     }

     if ((this.souvForm.controls['selectedPrenom'].value ===  null) || (this.souvForm.controls['selectedPrenom'].value ===  '') ) { 
                alert( "Prénom manquant");
                // this.onAnnuler();
                return;
     }

   
   const data = {
        nom: this.souvForm.controls['selectedNom'].value,
        prenom: this.souvForm.controls['selectedPrenom'].value,
        date_naissance: this.souvForm.controls['selectedDate_naissance'].value,
        date_mort: this.souvForm.controls['selectedDate_mort'].value,
        date_debut_regne: this.souvForm.controls['selectedDate_debut_regne'].value,
        date_fin_regne: this.souvForm.controls['selectedDate_fin_regne'].value,
        faits_marquants: this.souvForm.controls['selectedFaits_marquants'].value
      };

      console.log('DATA ENVOYEE', data);

      this.gestionSouvService.ajouterSouv(data).subscribe({

              next: (res) => {

                  alert(
                      "Le souverain " +
                      data.nom +
                      " " +
                      data.prenom +
                      " est créé."
                  );

                  this.onAnnuler();
              },

              error: (err) => {

                  if (err.status === 409) {
                      alert("Ce souverain existe déjà.");
                  }

                  console.error(err);
              }

       });


  }  // onCreation

 onModification() {

    const id = this.souvForm.controls['selectedSouv'].value;

    if (!id) {
        alert("Veuillez sélectionner un souverain.");
        return;
    }

    if (
        this.souvForm.controls['selectedNom'].value === null ||
        this.souvForm.controls['selectedNom'].value === ''
    ) {
        alert("Nom manquant");
        return;
    }

    if (
        this.souvForm.controls['selectedPrenom'].value === null ||
        this.souvForm.controls['selectedPrenom'].value === ''
    ) {
        alert("Prénom manquant");
        return;
    }

   const data = {
        nom: this.souvForm.controls['selectedNom'].value,
        prenom: this.souvForm.controls['selectedPrenom'].value,
        date_naissance: this.souvForm.controls['selectedDate_naissance'].value,
        date_mort: this.souvForm.controls['selectedDate_mort'].value,
        date_debut_regne: this.souvForm.controls['selectedDate_debut_regne'].value,
        date_fin_regne: this.souvForm.controls['selectedDate_fin_regne'].value,
        faits_marquants: this.souvForm.controls['selectedFaits_marquants'].value
      };


    console.log('DATA MODIFICATION', data);


   this.gestionSouvService.modifierSouv(id, data).subscribe({

        next: (res) => {

            alert(
                "Le souverain " +
                data.nom +
                " " +
                data.prenom +
                " est modifié."
            );

            this.onAnnuler();
        },

        error: (err) => {

            if (err.status === 409) {
                alert(err.error.message);
                return;
            }

            console.error(err);
            alert("Erreur lors de la modification.");
        }
        
    });

   

}  // onModification

 onSuppression() {

    const id = this.souvForm.controls['selectedSouv'].value;

    if (!id) {
        alert("Veuillez sélectionner un souverain.");
        return;
    }

    const nom = this.souvForm.controls['selectedNom'].value;
    const prenom = this.souvForm.controls['selectedPrenom'].value;

    const confirmation = confirm(
        "Confirmez-vous la suppression de " +
        nom +
        " " +
        prenom +
        " ?"
    );

    if (!confirmation) {
        return;
    }

    this.gestionSouvService.supprimerSouv(id).subscribe((res: any) =>{

         console.log('res_modifierSouv:', res);

            alert(
                "Le souverain " + nom + " " + prenom + " est supprimé."
            );

            this.onAnnuler();

    });


  

}  // onSuppression

  onAnnuler() {
      this.souvForm.reset();
      this.gestionSouvService.getGestionSouv().subscribe(data => {
        this.liste = data;     
        this.cdr.detectChanges();   
        console.log ('this.liste_getGestionSouv: ' , this.liste);
        this.souvForm.controls['souvSelect'].setValue("", {onlySelf: true});   
        //  this.jtForm.controls['jtSelect'].setValue("");
      });   
  }  // onAnnuler

 


  
}









































// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-gestion-jt',
//   imports: [],
//   templateUrl: './gestion-jt.html',
//   styleUrl: './gestion-jt.css',
// })
// export class GestionJT {}































// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-gestion-souv',
//   imports: [],
//   templateUrl: './gestion-souv.html',
//   styleUrl: './gestion-souv.css',
// })
// export class GestionSouv {}
