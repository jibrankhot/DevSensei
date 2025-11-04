import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private seenTopics: string[] = [];

  markComplete(topicId: string) {
    if (!this.seenTopics.includes(topicId)) {
      this.seenTopics.push(topicId);
      localStorage.setItem('completedTopics', JSON.stringify(this.seenTopics));
    }
  }

  getCompleted(): string[] {
    const data = localStorage.getItem('completedTopics');
    return data ? JSON.parse(data) : [];
  }

  getProgressPercentage(): number {
    const allTopics = 52; // total topics
    const done = this.getCompleted().length;
    return Math.round((done / allTopics) * 100);
  }
}
