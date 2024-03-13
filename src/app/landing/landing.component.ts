import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import {LandingValues} from './buttons'
import {linkClickCounter} from '../firebase.config'
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

var commonimports  = [CommonModule, RouterLink,HttpClientModule]
var button_values = LandingValues.button_values;
var other_platforms = LandingValues.other_platforms;



function fetcher(){
  const https = require('https');

  const req = https.request({
      hostname: 'raw.githubusercontent.com',
      port: 443,
      path: '/eminbdr/datasets_from_books/main/constants.json',
      method: 'GET',
    }, (res:any) => {
    let data = '';
  
    res.on('data', (chunk:any) => {
      data += chunk;
    });
  
    res.on('end', () => {
  
        button_values = JSON.parse(data);
          console.log(button_values)
      
    });
  });
  
  req.on('error', (error:any) => {
    console.error('Error fetching data:', error);
  });
  
  req.end();
}


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
  buttons:any;

  other_platforms = other_platforms;
  constructor() { fetcher();
    this.buttons = button_values
    ;this.buttons.forEach((item: any ) => {
    // Assign the value of name_en to name
    item.name = item.name_de;
  });}
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
  buttons = button_values;
  other_platforms = other_platforms;
  clickCounter = linkClickCounter

  constructor() { this.buttons.forEach((item: any ) => {
    // Assign the value of name_en to name
    item.name = item.name_en;
  });

  
  }
}