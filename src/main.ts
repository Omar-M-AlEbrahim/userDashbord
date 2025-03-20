import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { UserEffects } from './app/store/user.effects';
import { userReducer } from './app/store/user.reducer';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));