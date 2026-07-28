import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AffichageSouv2Service {

  constructor(private http: HttpClient) {}

  getSouv(idSouv: any): Observable<any[]> {

      // const apiUrl = 'https://projet-sf-backend.vercel.app/menu/affichage-souv/affichage-souv2/${idSouv}';

      const apiUrl = `http://localhost:3000/menu/affichage-souv/affichage-souv2/${idSouv}`;

      // const apiUrl = `http://localhost:3000/menu/affichage-souv2/${idSouv}`;

      // private apiUrl = 'http://localhost:3000/menu/affichage-souv';


    return this.http.get<any[]>(apiUrl);
  }

}



// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AffichageSouv2Service {}
