import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { APP_ROUTES } from "./app.routes";
import { provideClientHydration } from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(
            withFetch()
        ),
        provideRouter(
            APP_ROUTES,
            withComponentInputBinding()
        ),
        provideClientHydration()
    ],
};
