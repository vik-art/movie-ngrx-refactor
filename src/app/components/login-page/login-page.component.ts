import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent{
  submitted: boolean = false;
  title: string = 'Please, sing in to enter the system!';

  constructor(
    private route: Router,
    // private database: DatabaseService,
    private store: Store
  ) {}

  onLoginUser(event: any) {
    this.submitted = true;
      // this.auth.login(event).subscribe(() => {
      //   this.database.getUser().subscribe((res) => {
      //     res?.map((user) => {
      //       if (user.email === event.email) {
      //         localStorage.setItem('id', user.id!);
      //       }
      //     });
    //   });
    this.store.dispatch(authActions.login(event))
    console.log(event)

       
        this.route.navigate(['/user']);
  //     })
  }
}
