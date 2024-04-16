import { Component } from '@angular/core';
import * as phrasalVerbs from './phrasals.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wortschatz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wortschatz.component.html',
  styleUrl: './wortschatz.component.scss'
})
export class WortschatzComponent {
  phrasalVerbs = (phrasalVerbs as any).default;
  constructor() {
  }
}
