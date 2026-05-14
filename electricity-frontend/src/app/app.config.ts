import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { ENVIRONMENT } from './environment.token';
import { environment } from './environments/environment';

registerLocaleData(localeDe);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
      }),
    ),

    { provide: LOCALE_ID, useValue: 'de-DE' },

    provideBrowserGlobalErrorListeners(),

    provideZonelessChangeDetection(),

    provideClientHydration(withEventReplay()),

    provideHttpClient(withInterceptors([authInterceptor])),

    { provide: ENVIRONMENT, useValue: environment },
  ],
};
