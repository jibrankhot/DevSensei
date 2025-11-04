import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatUiComponent } from '../../shared/chat-ui/chat-ui.component';
import { TopicData } from './accessibility.topic';

@Component({
  selector: 'app-accessibility-page',
  standalone: true,
  imports: [CommonModule, ChatUiComponent],
  templateUrl: './accessibility.page.html'
})
export class AccessibilityPage {
  steps = TopicData;
}
