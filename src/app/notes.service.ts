import { Injectable } from '@angular/core';
import { RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class NotesService {

  API_URL = 'https://learn2018-be.herokuapp.com';
  POST_NOTE = '/posts';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  postNote(text) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.authService.token,
      })
    };

    const data = {
      text: text
    };

    this.http.post(this.API_URL + this.POST_NOTE, data, headers).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
  }
}
