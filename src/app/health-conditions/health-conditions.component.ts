import { Component, OnInit } from '@angular/core';
import {CookieUtilityService} from "../core/cookie-utility.service";
import {Router} from "@angular/router";

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
              private router: Router) { }

  ngOnInit(): void {
    this.userName = this.cookieService.getCookie('email');
  }

  logout() {
    this.router.navigate(['login']).then(() => this.cookieService.deleteAll());
  }

  showOption(option: number) {
    this.optionSelected = option;

  }
}
