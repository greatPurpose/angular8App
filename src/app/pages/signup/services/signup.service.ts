import { Injectable } from "@angular/core";

import { User } from "../../../core/models/user";
import { AuthService } from "../../../core/services/auth.service";
import { GetScoreService } from "../../../core/services/getScore.service";
import { EnterCodeService } from "../../../core/services/enterCode.service";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  user: User = {
    firstName: "",
    lastName: "",
    phone: "",
    password: "",
    degree: "",
    employment: "",
    income: 0,
    savings: 0,
    debt: 0,
    age: 0,
    zipcode: "",
    haveVehicle: true,
    haveHouse: true,
    havePet: true,
    have_health_cover: "Don't know",
    have_vision_cover: "Don't know",
    have_dental_cover: "Don't know",
    have_life_cover: "Don't know",
    have_longtermdisability_cover: "Don't know",
    have_shorttermdisability_cover: "Don't know",
    have_accident_cover: "Don't know",
    have_criticalillness_cover: "Don't know",
    have_auto_cover: "Don't know",
    have_homeowner_cover: "Don't know",
    have_renters_cover: "Don't know",
    have_pet_cover: "Don't know",
    terms: false,
  };

  constructor(
    private authService: AuthService,
    private getScoreService: GetScoreService,
    private enterCodeService: EnterCodeService
  ) {}

  savePersonalInfo(user: User) {
    this.user.firstName = user.firstName;
    this.user.lastName = user.lastName;
    this.user.phone = user.phone;
  }

  saveMorePersonalInfo(user: User) {
    this.user.degree = user.degree;
    this.user.employment = user.employment;
    this.user.income = user.income;
    this.user.savings = user.savings;
    this.user.debt = user.debt;
    this.user.age = user.age;
    this.user.zipcode = user.zipcode;
    this.user.haveVehicle = user.haveVehicle;
    this.user.haveHouse = user.haveHouse;
    this.user.havePet = user.havePet;
  }

  saveCoverageInfo(user: User) {
    this.user.have_health_cover = user.have_health_cover;
    this.user.have_vision_cover = user.have_vision_cover;
    this.user.have_dental_cover = user.have_dental_cover;
    this.user.have_life_cover = user.have_life_cover;
    this.user.have_longtermdisability_cover =
      user.have_longtermdisability_cover;
    this.user.have_shorttermdisability_cover =
      user.have_shorttermdisability_cover;
    this.user.have_accident_cover = user.have_accident_cover;
    this.user.have_criticalillness_cover = user.have_criticalillness_cover;
    this.user.have_auto_cover = user.have_auto_cover;
    this.user.have_homeowner_cover = user.have_homeowner_cover;
    this.user.have_renters_cover = user.have_renters_cover;
    this.user.have_pet_cover = user.have_pet_cover;
  }

  saveVerifyInfo(user: User) {
    this.user.firstName = user.firstName;
    this.user.lastName = user.lastName;
    this.user.phone = user.phone;
    this.user.password = 'protectonpass';
  }

  getScore() {
    return this.getScoreService.register(this.user);
  }

  signup() {
    return this.authService.register(this.user);
  }

  enterCode(code) {
    return this.enterCodeService.register(this.user.phone, code);
  }
}
