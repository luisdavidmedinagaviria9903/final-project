import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HealthConditionService {

  private apiUrl = environment.apiUrl;

  private saveUrl =  `${this.apiUrl}user/health/condition/save`;
  private findAllSicknessUrl =  `${this.apiUrl}user/sickness/find/all`;

  constructor(private http: HttpClient) { }

  saveHealthCondition(params: any){
    return this.http.post<any>(this.saveUrl,params);
  }
  findAllSickness(){
    return this.http.get<any>(this.findAllSicknessUrl);
  }

}
