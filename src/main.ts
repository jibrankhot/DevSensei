import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(await import('./app/app.component').then(m => m.AppComponent), {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
