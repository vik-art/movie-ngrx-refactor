import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthRequest } from 'src/app/common/interfaces/user-request.interface';
import { authActions } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  submitted: boolean = false;
  title: string = 'Please, sing up to enter the system!';

  constructor(private store: Store) { }

  onCreateNewUser(event: AuthRequest) {
    this.store.dispatch(authActions.register({ request: event }));
  }
}
