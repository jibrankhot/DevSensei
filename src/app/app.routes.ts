import { Routes } from '@angular/router';
import { AccessibilityPage } from './topics/accessibility/accessibility.page';
import { DirectivesComponent } from './topics/directives/directives.component';
// import { DirectivesPage } from './topics/directives/directives.page';

export const routes: Routes = [
    { path: 'accessibility', component: AccessibilityPage },
    { path: 'directives', component: DirectivesComponent },
    { path: '', redirectTo: 'accessibility', pathMatch: 'full' },
    { path: '**', redirectTo: 'accessibility' }
];
