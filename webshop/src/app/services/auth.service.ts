import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/Product';
import { User } from '../models/User';

interface AuthResponse {
  "localId": string,
  "email": string,
  "displayName": string,
  "idToken": string,
  "registered": boolean,
  "refreshToken": string,
  "expiresIn": string
}

interface LookupResponse {
  users: FirebaseUser[]
}

interface FirebaseUser {
  "localId": string,
  "email": string,
  "emailVerified": boolean
  "displayName": string,
  "providerUserInfo": string[]
  "photoUrl": string,
  "passwordHash": string,
  "passwordUpdatedAt": number,
  "validSince": string,
  "disabled": boolean,
  "lastLoginAt": number,
  "createdAt": string,
  "customAuth": boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiKey = "AIzaSyB-gjgycGfDG5Lr2mHiqnhp3L26qD8fobk";
  private baseUrl = "https://identitytoolkit.googleapis.com/v1/accounts"
  private signupUrl = this.baseUrl + ":signUp?key=" + this.apiKey;
  private loginUrl = this.baseUrl + ":signInWithPassword?key=" + this.apiKey;
  private lookupUrl = this.baseUrl + ":lookup?key=" + this.apiKey;
  private updateUrl = this.baseUrl + ":update?key=" + this.apiKey;
  loggedInSubject = new BehaviorSubject(new User("","","","",0));

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<AuthResponse> {
    const payload = {
      "email": email,
      "password": password,
      "returnSecureToken": true
    }
    const headers = {
      "Content-Type": "application/json"
    }
    return this.http.post<AuthResponse>(this.signupUrl, payload, {headers});
  }

  login(email: string, password: string): Observable<AuthResponse> {
    const payload = {
      "email": email,
      "password": password,
      "returnSecureToken": true
    }
    const headers = {
      "Content-Type": "application/json"
    }
    return this.http.post<AuthResponse>(this.loginUrl, payload, {headers});
  }

  findUser(): Observable<LookupResponse> {
    const payload = {
      "idToken": sessionStorage.getItem("token")
    }
    const headers = {
      "Content-Type": "application/json"
    }
    return this.http.post<LookupResponse>(this.lookupUrl, payload, {headers});
  }

  updateUser(user: User): Observable<LookupResponse> {
    const payload = {
      idToken: sessionStorage.getItem("token"),
      displayName: user.displayName,
      photoUrl: user.photoUrl,
      deleteAttribute: [],
      returnSecureToken: false
    }
    const headers = {
      "Content-Type": "application/json"
    }
    return this.http.post<LookupResponse>(this.updateUrl, payload, {headers});
  }
}
