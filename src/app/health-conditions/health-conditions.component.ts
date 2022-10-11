import { Component, OnInit } from '@angular/core';
import {CookieUtilityService} from "../core/cookie-utility.service";
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-health-conditions',
  templateUrl: './health-conditions.component.html',
  styleUrls: ['./health-conditions.component.css']
})
export class HealthConditionsComponent implements OnInit {

  userName: string = '';
  familiarConditionsShow = false;
  registerHealthConditions = false;
  optionSelected = 1;

  constructor(private cookieService: CookieUtilityService,
              private router: Router,
              private userService: LoginService) { }

  ngOnInit(): void {
    this.userService.findByEmail(this.cookieService.getCookie('email')).subscribe(response => {
      this.userName =  response.fullName;
    })
  }

  logout() {
    this.router.navigate(['login']).then(() => this.cookieService.deleteAll());
  }

  showOption(option: number) {
    this.optionSelected = option;

  }
}
