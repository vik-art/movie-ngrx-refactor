import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

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
    // private store: Store
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

       
        this.route.navigate(['/user']);
  //     })
  }
}
