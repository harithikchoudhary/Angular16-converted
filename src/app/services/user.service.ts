import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    // Simulated API call
    return of([
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' }
    ]).pipe(
      catchError(this.handleError<User[]>('getAll', []))
    );
  }

  getById(id: number): Observable<User> {
    return of({
      id: id,
      name: 'User ' + id,
      email: 'user' + id + '@example.com',
      role: 'user'
    }).pipe(
      catchError(this.handleError<User>(`getById id=${id}`))
    );
  }

  create(user: User): Observable<User> {
    return of(Object.assign({}, user, { id: Date.now() })).pipe(
      catchError(this.handleError<User>('create'))
    );
  }

  update(id: number, user: User): Observable<User> {
    return of(Object.assign({}, user)).pipe(
      catchError(this.handleError<any>('update'))
    );
  }

  remove(id: number): Observable<{ success: boolean }> {
    return of({ success: true }).pipe(
      catchError(this.handleError<{ success: boolean }>('remove'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
