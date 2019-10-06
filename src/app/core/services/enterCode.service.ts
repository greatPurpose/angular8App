import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnterCodeService {

  API_USER_URL = environment.apiEnterCodeUrl;

  constructor(
    private http: HttpClient
  ) { }

  extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  register(phoneNumber: string, code: string) {

    const data = {
      phone_number: phoneNumber,
      code: code,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.API_USER_URL, data, httpOptions)
  }
}
