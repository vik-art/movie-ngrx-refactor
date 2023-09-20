import { createFeature, createReducer, on } from '@ngrx/store';
import { initiaAuthlState } from 'src/app/common/interfaces/auth-initial-state.interface';
import { authActions } from './auth.actions';

const initialAuthState: initiaAuthlState = {
  isSubmitting: false,
  user: null,
  error: null,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialAuthState,
    on(authActions.register, (state) => ({
      ...state,
      isSubmitting: true,
      user: null,
      error: null,
    })),
    on(authActions.registerSuccess, (state) => ({
      ...state,
      isSubmitting: true,
      user: state.user,
      error: null,
    })),
    on(authActions.registerFailure, (state) => ({
      ...state,
      isSubmitting: true,
      user: null,
      error: state.error,
    }))
  ),
});

export const { name: authFeatureKey, reducer: authReducer } = authFeature;