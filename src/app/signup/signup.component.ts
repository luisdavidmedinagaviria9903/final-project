import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {SignupService} from "../services/signup.service";
import {CONTACT_SUPPORT, show_popup, TITLE_ERROR, TITLE_INFO} from "../core/popup";
import {CookieUtilityService} from "../core/cookie-utility.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form!: UntypedFormGroup;


  constructor(private formBuilder: UntypedFormBuilder,
              private signupService: SignupService,
              private cookieService: CookieUtilityService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]],
      fullName: ['', [Validators.required]],
      userName: ['', [Validators.required]]
    });
  }

  signUp() {
    if (this.form.valid){
      this.signupService.signUp({
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value,
        fullName: this.form.get('fullName')?.value,
        userName: this.form.get('userName')?.value
      }).subscribe({
        next: (response: any) => {
          if (response.id){
            show_popup(TITLE_INFO, `Hola ${response.fullName} registro exitoso!`)
              .then(() => this.router.navigate(['login']))
          }else {
            show_popup(TITLE_ERROR, 'Algo salio mal, comunicate con soporte');
          }
        },error: () => {
          show_popup(TITLE_ERROR, 'Algo salio mal, comunicate con soporte');
        }
      })

    }else {
      show_popup(TITLE_INFO, 'Hay campos invalidos, por favor verifica!')
      this.form.markAllAsTouched();
    }
  }
}
