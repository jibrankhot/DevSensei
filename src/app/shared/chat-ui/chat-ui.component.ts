import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

export interface ChatStep {
  type: 'mentor' | 'user';
  text: string;
  nextHint?: string | null;
  question?: string;
}

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
  disableNext = false;
  isChatComplete = false;
  recapPoints: string[] = [];
  progressPercent = 0;

  private typingAudio = new Audio('/assets/sounds/typing.mp3');
  private popAudio = new Audio('/assets/sounds/pop.mp3');

  ngOnInit(): void {
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
    this.updateProgress();
  }

  revealNext(hintText: string) {
    if (this.disableNext) return;
    this.disableNext = true;

    this.chatHistory.push({ type: 'user', text: hintText });
    this.playSound('pop');
    this.smoothScroll();

    this.currentStep++;
    const nextStep = this.steps[this.currentStep];
    if (nextStep) {
      setTimeout(() => {
        this.showMentorMessage(nextStep.text, nextStep.nextHint);
        this.disableNext = false;
      }, 1000);
    } else {
      this.endChat();
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

  private updateProgress() {
    this.progressPercent = Math.min(((this.currentStep + 1) / this.steps.length) * 100, 100);
  }

  private endChat() {
    this.isChatComplete = true;
    this.recapPoints = [
      'Understood what the topic means',
      'Explored how it works internally',
      'Learned real-world use cases',
      'Practiced with examples',
      'Avoided common mistakes'
    ];
    this.updateProgress();
  }
}
