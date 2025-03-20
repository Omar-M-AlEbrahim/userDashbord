import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure, loadUserById, loadUserByIdSuccess, loadUserByIdFailure } from './user.actions';
import { User } from '../core/services/user.service';

export interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null
};

export const userReducer = createReducer(
  initialState,
  
  on(loadUsers, state => ({ ...state, loading: true, error: null })),
  on(loadUsersSuccess, (state, { users }) => ({ ...state, users, loading: false })),
  on(loadUsersFailure, (state, { error }) => ({ ...state, error: error || 'Failed to load users', loading: false })),

  on(loadUserById, state => ({ ...state, selectedUser: null, loading: true, error: null })), // إعادة تعيين selectedUser
  on(loadUserByIdSuccess, (state, { user }) => ({ ...state, selectedUser: user, loading: false })),
  on(loadUserByIdFailure, (state, { error }) => ({ ...state, error: error || 'Failed to load user details', loading: false }))
);
