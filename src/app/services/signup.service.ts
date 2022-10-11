import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = environment.apiUrl;

  private signUpUrl =  `${this.apiUrl}user/save`;

  constructor(private http: HttpClient) {
  }

  signUp(params: any){
    return this.http.post<any>(this.signUpUrl,params);
  }
}
