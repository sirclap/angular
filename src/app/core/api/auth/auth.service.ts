import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from './model/login-request.model';
import { LoginResponse } from './model/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private basePath = environment.apiUrl + '/login';

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.basePath, loginRequest);
  }
}
