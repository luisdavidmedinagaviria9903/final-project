import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieUtilityService {
  constructor(private readonly cookieService: CookieService) {}

  public getCookie(name: string): string {
    return this.cookieService.get(name);
  }

  public saveCookie(
    name: string,
    value: string,
    expires: number,
    path: string,
    domain: string,
  ): void {
    this.cookieService.set(name, value, expires, path, domain);
  }

  public deleteAllCookies(path: string, domain: string): void {
    this.cookieService.deleteAll(path, domain);
  }

  public deleteAll(): void{
    this.cookieService.deleteAll();
  }

  public deleteCookie(name: string, path: string, domain: string): void {
    this.cookieService.delete(name, path, domain);
  }
}
