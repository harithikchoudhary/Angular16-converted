import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  checkAuth(): Observable<boolean> {
    // Implementation
    return of(true);
  }

  login(credentials: any): Observable<{ token: string }> {
    // Implementation
    return of({ token: 'dummy-token' });
  }

  logout(): Observable<boolean> {
    // Implementation
    return of(true);
  }
}
