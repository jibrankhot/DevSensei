import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChatService } from './core/chat.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progress = 0;

  constructor(private chatService: ChatService) {
    this.progress = chatService.getProgressPercentage();
  }
  onMouseMove(event: MouseEvent) {
    const layers = document.querySelectorAll('.parallax-layer') as NodeListOf<HTMLElement>;
    const x = (event.clientX / window.innerWidth - 0.5) * 40;
    const y = (event.clientY / window.innerHeight - 0.5) * 40;

    layers.forEach((layer, i) => {
      const depth = (i + 1) * 10;
      layer.style.transform = `translate3d(${x / depth}px, ${y / depth}px, 0)`;
    });
  }
}
