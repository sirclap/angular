import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../model/session.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private localStorageService: Storage;
  private sessionKey: string = 'session_token';
  private currentSession: Session = null;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
  }

  setCurrentToken(accessToken: string): void {
    var session = new Session(accessToken);
    this.setCurrentSession(session);
  }

  setCurrentSession(session: Session): void {
    this.currentSession = session;
    this.localStorageService.setItem(this.sessionKey, JSON.stringify(session));
  }

  loadSessionData(): Session {
    var sessionStr = this.localStorageService.getItem(this.sessionKey);
    return sessionStr ? <Session>JSON.parse(sessionStr) : null;
  }

  getCurrentSession(): Session {
    return this.currentSession;
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem(this.sessionKey);
    this.currentSession = null;
  }

  getCurrentUser(): User {
    var session: Session = this.getCurrentSession();
    return session && session.user ? session.user : null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentToken() != null ? true : false;
  }

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return session && session.accessToken ? session.accessToken : null;
  }

  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }
}
