import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    public API_URL: string = environment.apiUrl;
    public errStatus: string;

    constructor(
      private http: HttpClient
    ) { }

    doLogin({email, password}): Observable<any> {
      const body = new HttpParams()
        .set('email', email)
        .set('password', password);

      return this.http.post<any>(
        this.buildUrl('auth/login/'),
        body.toString(),
        {
          headers: this.buildHeader()
        }
      );
    }

    handleError(err) {
      if (err.error instanceof Error) {
          console.log(`Client side Error: ${ err.error.message }`);
      } else {
          this.errStatus = err.status;
          console.log(this.errStatus);
      }
    }

    // build header for request
    private buildHeader(): HttpHeaders {
        const header = new HttpHeaders({
            // Accept: 'application/json',
            // 'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return header;
    }

    private buildParams(paramsData): HttpParams {
        const params = new HttpParams({ fromObject: paramsData });
        return params;
    }
    // build url for request
    private buildUrl(endpoint: string): string {
        return this.API_URL + endpoint;
    }
}
