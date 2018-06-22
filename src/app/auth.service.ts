import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  API_URL = 'https://learn2018-be.herokuapp.com';
  TOKEN_KEY = 'Authorization';

  constructor(private http: HttpClient, private router: Router) { }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigateByUrl('/');
  }

  login(username: string, password: string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };

    const data = {
      username: username,
      password: password
    };

    this.http.post(this.API_URL + '/auth/login', data, headers).subscribe(
      (res: any) => {
        localStorage.setItem(this.TOKEN_KEY, res.token);

        this.router.navigateByUrl('/members');
      }
  }

  signup(username: string, email: string, password: string) {
    const headers = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' })
    };

    const data = {
      username: username,
      password: password,
      email: email
    };

    this.http.post(this.API_URL + '/users', data, headers).subscribe(
      (res: any) => {
        localStorage.setItem(this.TOKEN_KEY, res.token);

        this.router.navigateByUrl('/members');
      }
  }


  getAccount() {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem(this.TOKEN_KEY)
      })
    };
    return this.http.get(this.API_URL + '/users/me',  headers);
  }
}
