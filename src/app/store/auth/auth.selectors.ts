import { createSelector } from '@ngrx/store';
import { initiaAuthlState } from 'src/app/common/interfaces/auth-initial-state.interface';

export const selectFeature = (state: { auth: initiaAuthlState }) => state.auth;

export const currentUser = createSelector(selectFeature, (state) => state.user);

export const isSubmitting = createSelector(
  selectFeature,
  (state) => state.isSubmitting
);

export const error = createSelector(
  selectFeature,
  (state) => state.error
)
