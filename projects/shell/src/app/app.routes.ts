// projects/shell/src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProgrammaticLoadingComponent } from './programmatic-loading/programmatic-loading.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'booking',
      loadChildren: () => 
        loadRemoteModule('mfe1', './routes')
        .then(m => m.MFE1_ROUTES)

        //import('mfe1/routes').then(m => m.MFE1_ROUTES)
    },
    {
      path: 'my-tickets',
      loadComponent: () => 
        loadRemoteModule('mfe1', './Component')
        .then(m => m.MyTicketsComponent)
    },
    {
      path: 'programmatic',
      component: ProgrammaticLoadingComponent
    },
    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

