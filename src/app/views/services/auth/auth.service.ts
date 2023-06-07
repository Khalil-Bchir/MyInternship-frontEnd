import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http : HttpClient ) { 

  }

  login(data:any){
    return this.http.post('http://localhost:3000/api/login',data)
  }

}
