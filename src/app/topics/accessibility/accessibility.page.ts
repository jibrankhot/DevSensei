import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatStep, ChatUiComponent } from '../../shared/chat-ui/chat-ui.component';
@Component({
  selector: 'app-accessibility-page',
  standalone: true,
  imports: [CommonModule, ChatUiComponent],
  templateUrl: './accessibility.page.html',
  styleUrls: ['./accessibility.page.scss']
})
export class AccessibilityPage {
  steps: ChatStep[] = [
    { type: 'mentor', text: 'Hey Jibran 👋 Let’s explore accessibility in Angular.', nextHint: 'Sure! What is accessibility?' },
    { type: 'mentor', text: 'Accessibility means making your app usable by everyone, including users with disabilities.', nextHint: 'Show me a real-world example.' },
    { type: 'mentor', text: 'In Angular, use semantic HTML and ARIA attributes for improved accessibility.', nextHint: 'Got it!' }
  ];
}
