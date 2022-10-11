import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserFamilyService {
  private apiUrl = environment.apiUrl;

  private saveUrl =  `${this.apiUrl}user/family/save`;
  private getByUserEmailUrl =  `${this.apiUrl}user/family/find/by/email/`;

  constructor(private http: HttpClient) { }


  save(params: any){
    return this.http.post<any>(this.saveUrl,params);
  }

  getByUserEmail(email: string){
    return this.http.get<any>(this.getByUserEmailUrl + email);
  }

}
