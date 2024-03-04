import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/services/auth.service';
import { authActions } from './auth.actions';
import { exhaustMap, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Injectable()
export class AuthEffects {
  constructor(
    private http: AuthService,
    private actions$: Actions,
    private route: Router,
    public alertService: AlertService
  ) {}

  createNewUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.register),
      exhaustMap((action) => {
        return this.http.register(action.request).pipe(
          map((res) => {
            console.log(res);
            this.route.navigateByUrl('/movie');
            this.alertService.success('You have successfully created new account')
            return authActions.registerSuccess({ user: res.user });
          })
        );
      })
    );
  });

  loginExistingUser = createEffect(() => {
    return this.actions$.pipe(
      ofType(authActions.login),
      exhaustMap((action) => {
        const { email, password } = action;
        return this.http.signIn(email, password).pipe(
          map(res => {
            this.route.navigateByUrl('/movie');
            this.alertService.success('You have successfully logged in')
            return authActions.registerSuccess({ user: res.user });
          })
        )
      })
    )
  })
}
