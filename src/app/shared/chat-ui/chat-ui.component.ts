import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

/* ✅ Define and export ChatStep so topics can import it */
export interface ChatStep {
  type: 'mentor' | 'user';
  text: string;
  nextHint?: string | null;
  question?: string;
}

/* Internal structure for what’s actually displayed in the chat */
interface ChatMessage {
  type: 'mentor' | 'user';
  text: string;
  nextHint?: string | null;
}

@Component({
  selector: 'app-chat-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.scss']
})
export class ChatUiComponent implements OnInit, AfterViewChecked {
  @Input() steps: ChatStep[] = [];
  @ViewChild('chatContainer') chatContainer!: ElementRef;

  chatHistory: ChatMessage[] = [];
  isTyping = false;
  currentStep = 0;

  private typingAudio = new Audio('/assets/sounds/typing.mp3');
  private popAudio = new Audio('/assets/sounds/pop.mp3');

  ngOnInit(): void {
    // Start first mentor message after small delay
    if (this.steps.length > 0) {
      setTimeout(() => {
        const first = this.steps[0];
        this.showMentorMessage(first.text, first.nextHint);
      }, 600);
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private async showMentorMessage(text: string, nextHint?: string | null) {
    this.isTyping = true;
    const displayedText = await this.typeWriterEffect(text);
    this.isTyping = false;

    this.chatHistory.push({ type: 'mentor', text: displayedText, nextHint });
    this.playSound('pop');
  }

  revealNext(hintText: string) {
    this.chatHistory.push({ type: 'user', text: hintText });
    this.playSound('pop');
    this.smoothScroll();

    this.currentStep++;
    const nextStep = this.steps[this.currentStep];
    if (nextStep) {
      setTimeout(() => this.showMentorMessage(nextStep.text, nextStep.nextHint), 1200);
    }
  }

  private async typeWriterEffect(text: string): Promise<string> {
    let output = '';
    this.playSound('typing');
    for (let i = 0; i < text.length; i++) {
      output += text.charAt(i);
      await this.wait(25 + Math.random() * 15);
      this.scrollToBottom();
    }
    this.typingAudio.pause();
    this.typingAudio.currentTime = 0;
    return output;
  }

  private wait(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    } catch { }
  }

  private smoothScroll(): void {
    this.chatContainer.nativeElement.scrollTo({
      top: this.chatContainer.nativeElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  private playSound(type: 'typing' | 'pop') {
    const audio = type === 'typing' ? this.typingAudio : this.popAudio;
    audio.volume = 0.2;
    audio.play().catch(() => { });
  }
}
