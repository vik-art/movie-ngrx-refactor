import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, props } from '@ngrx/store';
import { AuthRequest } from 'src/app/common/interfaces/user-request.interface';

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{ request: AuthRequest }>(),
    RegisterSuccess: props<{ user: any }>(),
    RegisterFailure: props<{ error: HttpErrorResponse }>(),
    Login: props<AuthRequest>(),
    LoginSuccess: props<{ user: any }>(),
    LoginFailure: props<{ error: HttpErrorResponse }>(),
  },
});
