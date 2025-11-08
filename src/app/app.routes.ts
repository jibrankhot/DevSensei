import { Routes } from '@angular/router';
import { MentorLayoutComponent } from './layout/mentor-layout.component';
import { AccessibilityPage } from './topics/accessibility/accessibility.page';
import { DirectivesPage } from './topics/directives/directives.page';
import { AngularIndexPage } from './topics/angular-index/angular-index.page';

export const routes: Routes = [
    {
        path: '',
        component: MentorLayoutComponent,
        children: [
            // default tech area landing
            { path: '', component: AngularIndexPage },

            // topic routes (keep organized)
            { path: 'angular/accessibility', component: AccessibilityPage },
            { path: 'angular/directives', component: DirectivesPage },

            // fallback
            { path: '**', redirectTo: '' }
        ]
    }
];
