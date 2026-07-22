
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AffichageService {

  private apiUrl = 'https://projet-sf-backend.vercel.app/menu/affichage';

  // private apiUrl = 'http://localhost:3000/menu/affichage';


  // private apiUrl = 'http://localhost:5000/menu/affichage';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }  
}












// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AffichageService {}











// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class AffichageService {}
