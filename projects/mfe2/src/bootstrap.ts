import { createCustomElement } from '@angular/elements';
import { bootstrapApplication, createApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NgZone, booleanAttribute } from '@angular/core';

(async () => {

  const app = await createApplication({
    providers: [
      /* your global providers here */
      globalThis.ngZone ? { provide: NgZone, useValue: globalThis.ngZone } : [],
      provideClientHydration()
    ],
  });

  const mfe2Root = createCustomElement(AppComponent, {
    injector: app.injector,
  });

  customElements.define('mfe2-root', mfe2Root);
})();
