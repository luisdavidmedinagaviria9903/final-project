import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {UserFamilyService} from "../services/user-family.service";
import {CookieUtilityService} from "../core/cookie-utility.service";
import {show_popup, TITLE_ERROR, TITLE_INFO} from "../core/popup";
import {HealthConditionService} from "../services/health-condition.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-health-conditions',
  templateUrl: './user-health-conditions.component.html',
  styleUrls: ['./user-health-conditions.component.css']
})
export class UserHealthConditionsComponent implements OnInit {

  form!: UntypedFormGroup;
  typeOfSickness: SicknessType[] = [];
  typeOfUser: UserFamily[] = [];
  isAuthorized: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder,
              private userFamilyService: UserFamilyService,
              public cookieService: CookieUtilityService,
              private healthConditionService: HealthConditionService,
              private router: Router) {
    this.form = this.formBuilder.group({
      user_id: [null],
      is_familiar: [false],
      sickness_code:  ['',[Validators.required]],
      sickness_description:  [''],
      user_email: ['']
    });
  }

  ngOnInit(): void {

    if (this.cookieService.getCookie('email')){
      this.isAuthorized = true;

      this.healthConditionService.findAllSickness()
        .subscribe(value => this.typeOfSickness = value);

      this.userFamilyService.getByUserEmail(this.cookieService.getCookie('email')).subscribe({
        next: (response: any) => {
          if (response.length > 0){
            this.typeOfUser = response;
          }
        },error: () => {
          show_popup(TITLE_ERROR, 'Algo salio mal, comunicate con soporte');
        }
      })
    }else {
      show_popup(TITLE_ERROR, 'Todavia no estas logueado, por favor revisa!').
      then(() => this.router.navigate(['login']))
    }

  }

  submit() {
    let healthCondition = {
      sicknessCode: Number(this.form.get('sickness_code')?.value),
      isFamily: this.form.get('user_id')?.value != null,
      userEmail: this.cookieService.getCookie('email'),
      sicknessDescription: this.form.get('sickness_description')?.value,
      userId: Number(this.form.get('user_id')?.value),
    }


    this.healthConditionService.saveHealthCondition(healthCondition).subscribe({
      next: response => {
        if (response.id){
          show_popup(TITLE_INFO, `Tu condition de salud se registro exitosamente!`).then(result => window.location.reload());
        }else {
          show_popup(TITLE_ERROR, 'Algo salio mal, comunicate con soporte');
        }
      },error: () => {
        show_popup(TITLE_ERROR, 'Algo salio mal, comunicate con soporte');
      }
    })

  }
}
export interface SicknessType{
  id: number;
  description: string;
}

export interface UserFamily{
  id:any
  user: {
    id: number,
    email: string,
    name: string
  },
  name: string,
  email: string,
  phone: string

}
