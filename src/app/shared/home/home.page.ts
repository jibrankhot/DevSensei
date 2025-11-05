import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatUiComponent } from '../chat-ui/chat-ui.component';

type LanguageKey = 'angular' | 'node' | 'html' | 'scss';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [CommonModule, ChatUiComponent],
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage {
    selectedLanguage: LanguageKey = 'angular';
    languages: LanguageKey[] = ['angular', 'node', 'html', 'scss'];

    topicGroups: Record<LanguageKey, string[]> = {
        angular: [
            'Accessibility',
            'Directives',
            'RxJS',
            'Change Detection',
            'Dynamic Components',
            'Performance Optimization'
        ],
        node: [
            'Node.js Fundamentals',
            'Express API',
            'Middleware',
            'File System',
            'Authentication'
        ],
        html: [
            'Semantic Tags',
            'Forms & Inputs',
            'Canvas & Media'
        ],
        scss: [
            'Variables & Mixins',
            'Nesting',
            'Animations'
        ]
    };

    selectLanguage(lang: LanguageKey) {
        this.selectedLanguage = lang;
    }
}
