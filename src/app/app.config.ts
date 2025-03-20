import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { userReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';
import { UserDetailsComponent } from './features/user-details/user-details.component';
import { UserListComponent } from './features/user-list/user-list.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()), 
    provideRouter([
      { path: '', component: UserListComponent },
      { path: 'users/:id', component: UserDetailsComponent },
    ]),
    provideStore({ users: userReducer }),
    provideEffects([UserEffects])
  ]
};