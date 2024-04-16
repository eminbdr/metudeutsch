import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redirector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './redirector.component.html',
  styleUrl: './redirector.component.scss'
})
export class RedirectorComponent {
  url = ''
  active = false;
  constructor() {
    if (this.url && this.active) {
      window.location.href = this.url;
    }
  }

}
