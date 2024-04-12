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
  url = 'https://teams.microsoft.com/l/meetup-join/19:meeting_ZjUxMjdjYzMtYmE4Ni00N2NiLTk3YzAtZDA2OTJhYmQwNGY1@thread.v2/0?context=%7B%22Tid%22:%22a6d8404c-cd2d-433b-8f4c-c5d18f9693ca%22,%22Oid%22:%2297f1d51c-11f9-450b-aff3-dc65757c7eaf%22%7D'
  active = false;
  constructor() {
    if (this.url && this.active) {
      window.location.href = this.url;
    }
  }

}
