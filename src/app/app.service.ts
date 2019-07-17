// // Trong Module to import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from 'src/environments/environment';

// import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   public API_URL: string = environment.apiUrl;
//   public errStatus: string;

//   constructor(
//     private http: HttpClient
//   ) { }
//   handleError(err) {
//     if (err.error instanceof Error) {
//         console.log(`Client side Error: ${ err.error.message }`);
//     } else {
//         this.errStatus = err.status;
//         console.log(this.errStatus);
//     }
//   }

//   // build header for request
//   private buildHeader(): HttpHeaders {
//       const header = new HttpHeaders({
//           Accept: 'application/json',
//           'Content-Type': 'application/json'
//       });
//       return header;
//   }

//   private buildParams(paramsData): HttpParams {
//       const params = new HttpParams({ fromObject: paramsData });
//       return params;
//   }
//   // build url for request
//   private buildUrl(endpoint: string): string {
//       return this.API_URL + endpoint;
//   }
// }
