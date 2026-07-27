


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AffichageSouvService {

  private apiUrl = 'https://projet-sf-backend.vercel.app/menu/affichage-souv';

  // private apiUrl = 'http://localhost:3000/menu/affichage-souv';

  constructor(private http: HttpClient) {}

  getSouv(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }  
  
}




// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AffichageSouvService {}
