import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, EMPTY, Observable, of, tap } from 'rxjs';
import { Token } from '@angular/compiler';
import { LoginRequest } from 'src/app/Model/login-request';
import { User } from 'src/app/Model/user.model';
import { SESSION_STORAGE } from '@ng-web-apis/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly isAuthenticated$ = new BehaviorSubject<boolean>(false);

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Authorization'});

  constructor(
    @Inject(SESSION_STORAGE) private sessionStorage: any,
    private httpClient: HttpClient
  ) {}

  getIsAuthenticated(): Observable<boolean> {
    return of(!!this.sessionStorage.getItem('userInfo'));
  }

  login(userInfo: LoginRequest): Observable<LoginRequest> {
    console.log(userInfo)
    return this.httpClient.post<LoginRequest>('/api/auth/login', userInfo).pipe(tap(token => {
      this.sessionStorage.setItem('userInfo', JSON.stringify(token));
      console.log('Logged in successfully');
    }));
  }

  logout(): Observable<null> {
    this.sessionStorage.removeItem("userInfo");
    console.log('Logout');
    this.isAuthenticated$.next(false);
    return EMPTY;
  }

  getUserInfo(): Observable<User> {
    const token = this.sessionStorage.getItem('userInfo');
    return this.httpClient.post<User>('/api/auth/userinfo', token, { headers: this.headers });
  }

  setIsAuthenticated(token: Token): void {
    this.isAuthenticated$.next(!!token);
  }

}
