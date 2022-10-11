import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  private loginUrl =  `${this.apiUrl}user/login`;

  constructor(private http: HttpClient) {
  }

  login(params: any){
    return this.http.post<any>(this.loginUrl,params);
  }
}
