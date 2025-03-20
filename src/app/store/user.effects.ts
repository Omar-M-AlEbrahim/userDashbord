import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, of } from 'rxjs';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUserById, loadUserByIdSuccess, loadUserByIdFailure } from './user.actions';
import { UserService } from '../core/services/user.service';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions); 
  private userService = inject(UserService); 

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(({ page }) =>
        this.userService.getUsers(page).pipe(
          map(users => loadUsersSuccess({ users })),
          catchError(error => of(loadUsersFailure({ error: error.message || 'Error fetching users' })))
        )
      )
    )
  );

  loadUserById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserById),
      switchMap(({ id }) =>
        this.userService.getUserById(id).pipe(
          map(user => loadUserByIdSuccess({ user })),
          catchError(error => of(loadUserByIdFailure({ error: error.message || 'Error fetching user details' })))
        )
      )
    )
  );
}
