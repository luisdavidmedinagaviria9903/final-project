import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {CookieUtilityService} from "../core/cookie-utility.service";
import {UserFamilyService} from "../services/user-family.service";
import {show_popup, TITLE_ERROR, TITLE_INFO} from "../core/popup";

@Component({
  selector: 'app-familar-conditions',
  templateUrl: './familar-conditions.component.html',
  styleUrls: ['./familar-conditions.component.css']
})
export class FamilarConditionsComponent implements OnInit {

  form!: UntypedFormGroup;


  constructor(private formBuilder: UntypedFormBuilder,
              private cookieService: CookieUtilityService,
              private userFamilyService: UserFamilyService) {
    this.form = this.formBuilder.group({
      familiarName: ['',[Validators.required]],
      familiarEmail: ['',[Validators.required]],
      familiarPhone: ['', [Validators.required]],
      user_email: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    this.form.get('user_email')?.setValue(this.cookieService.getCookie('email'));
  }

  submit() {
    let userFamily: UserFamily = {
      user: {
        email: this.form.get('user_email')?.value
      },
      name: this.form.get('familiarName')?.value,
      email: this.form.get('familiarEmail')?.value,
      phone: this.form.get('familiarPhone')?.value
    }
    this.userFamilyService.save(userFamily).subscribe({
      next: response => {
        if (response.id){
          show_popup(TITLE_INFO, `Tu familiar ${response.name} se registro exitosamente!`);
        }else {
          show_popup(TITLE_ERROR, 'Algo salio mal, comunicate con soporte');
        }
      },error: () => {
        show_popup(TITLE_ERROR, 'Algo salio mal, comunicate con soporte');
      }
    })
  }
}
export interface UserFamily{
  user: {
    email: string
  },
  name: string,
  email: string,
  phone: string

}
