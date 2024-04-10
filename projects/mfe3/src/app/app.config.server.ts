import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';
import { APP_ROUTES } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideServerRendering()
  ]
};

export const config = mergeApplicationConfig(serverConfig);
