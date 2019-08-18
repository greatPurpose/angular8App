import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_USER_URL = environment.apiSignupUrl;

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

  register(user: User) {

    const data = {
      name: user.firstName + user.lastName,
      first_name: user.firstName,
      last_name: user.lastName,
      phone_number: user.phone,
      password: user.password,
      degree: user.degree,
      employment: user.employment,
      age: user.age,
      zipcode: user.zipcode,
      income: user.income,
      savings: user.savings,
      debt: user.debt,
      own_vehicle: user.haveVehicle,
      own_rent_house: user.haveHouse,
      own_pet: user.havePet,
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.API_USER_URL, data, httpOptions)
  }
}
