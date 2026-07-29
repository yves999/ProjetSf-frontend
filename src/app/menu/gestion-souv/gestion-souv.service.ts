
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GestionSouvService {

    // private apiUrl = 'http://localhost:3000/menu/gestion-souv';

     private apiUrl = 'https://projet-sf-backend.vercel.app/menu/gestion-souv';

    constructor(private http: HttpClient) {}

    getGestionSouv(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }  

    getGestionSouv2(idSouv: any): Observable<any[]> {

      //  const apiUrl2 = `http://localhost:3000/menu/gestion-souv/${idSouv}`;

       const apiUrl2 = `https://projet-sf-backend.vercel.app/menu/gestion-souv/${idSouv}`;

       return this.http.get<any[]>(apiUrl2);
    }

    ajouterSouv(data: any): Observable<any> {
        console.log ("ajouterSouv_data: ", data)
       return this.http.post(this.apiUrl, data);
    }

    modifierSouv(idSouv: any, data: any): Observable<any> {

        // const apiUrl2 = `http://localhost:3000/menu/gestion-souv/${idSouv}`;

          const apiUrl2 = `https://projet-sf-backend.vercel.app/menu/gestion-souv/${idSouv}`;

        console.log ("modifierSouv_data: ", data)

        return this.http.put(apiUrl2, data);
    }

    supprimerSouv(idSouv: any): Observable<any> {

          // const apiUrl2 = `http://localhost:3000/menu/gestion-souv/${idSouv}`;

       const apiUrl2 = `https://projet-sf-backend.vercel.app/menu/gestion-souv/${idSouv}`;


          console.log ("supprimerSouv_id: ", idSouv)

          return this.http.delete(apiUrl2);
     }


  }



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class GestionJtService {}
























// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class GestionSouvService {}
