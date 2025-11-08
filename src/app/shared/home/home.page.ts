import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

type LanguageKey = 'angular' | 'node' | 'html' | 'scss';

interface Topic {
    label: string;
    link: string;
}

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage {
    selectedLanguage: LanguageKey = 'angular';

    languages: LanguageKey[] = ['angular', 'node', 'html', 'scss'];

    topicGroups: Record<LanguageKey, Topic[]> = {
        angular: [
            { label: 'Accessibility', link: '/angular/accessibility' },
            { label: 'Directives', link: '/angular/directives' },
            { label: 'RxJS', link: '/angular/rxjs' }
        ],
        node: [{ label: 'Node.js Fundamentals', link: '/node/fundamentals' }],
        html: [{ label: 'Semantic Tags', link: '/html/semantics' }],
        scss: [{ label: 'Variables & Mixins', link: '/scss/variables' }]
    };

    constructor(private router: Router) { }

    selectLanguage(lang: LanguageKey) {
        this.selectedLanguage = lang;
    }

    goToTopic(link: string) {
        this.router.navigateByUrl(link);
    }
}
