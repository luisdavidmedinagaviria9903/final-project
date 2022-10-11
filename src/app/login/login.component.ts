import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {show_popup, TITLE_INFO} from "../core/popup";
import {Router} from "@angular/router";
import {CookieUtilityService} from "../core/cookie-utility.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: UntypedFormGroup;
  constructor(private formBuilder: UntypedFormBuilder,
              private loginService: LoginService,
              private router: Router,
              private cookieService: CookieUtilityService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]
    });
  }

  login(){
    if (this.form.valid){
        this.loginService.login({
          email: this.form.get('email')?.value,
          password: this.form.get('password')?.value
        }).subscribe({
          next: response => {
            if (response){
              this.cookieService.saveCookie('email', this.form.get('email')?.value, 600, '', '');

              show_popup(TITLE_INFO, 'Login exitoso')
                .then(() => this.router.navigate(['health-conditions']));
            }else {
              show_popup(TITLE_INFO, 'Usuario o contraseña incorrectos, por favor verifica!')
            }
          }, error: () => {
            show_popup(TITLE_INFO, 'Usuario o contraseña incorrectos, por favor verifica!');
          }
        })
    }else {
      show_popup(TITLE_INFO, 'Hay campos invalidos, por favor verifica!');
      this.form.markAllAsTouched();
    }
  }

}
