import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import {LandingValues} from './buttons'
import {linkClickCounter} from '../firebase.config'

var commonimports  = [CommonModule, RouterLink]
var button_values = LandingValues.button_values;
var button_names_de = LandingValues.button_names_de;
var button_names_en = LandingValues.button_names_en;
var other_platforms = LandingValues.other_platforms;

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: commonimports,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  encapsulation: ViewEncapsulation.None,
})

export class LandingComponent {
  clickCounter = linkClickCounter
  buttons = button_names_de.map((name, i) => ({
    name,
    ...button_values[i],
  }));
  other_platforms = other_platforms;
}

@Component({
  selector: 'app-landingen',
  standalone: true,
  imports: commonimports,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LandingenComponent {
  buttons = button_names_en.map((name, i) => ({
    name,
    ...button_values[i],
  }));
  other_platforms = other_platforms;
  clickCounter = linkClickCounter

  constructor() {
  }
}