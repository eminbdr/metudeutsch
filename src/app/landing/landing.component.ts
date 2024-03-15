import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation,Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { linkClickCounter } from '../firebase.config';
import { LandingValues } from './buttons';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { DatashareService } from '../data-share.service';


var commonimports  = [CommonModule, RouterLink]

@Component({template: ''})
export class BaseLandingComponent {
  clickCounter = linkClickCounter;
  buttons: any;
  other_platforms = LandingValues.other_platforms;
  overall: any;

  constructor(protected dataService: DatashareService) {}
  ngOnInit() {
    this.processData();
  }

  


  async processData() {
    {
    (await this.dataService.fetchData()).subscribe(
      (data:any) => {
        this.overall = data; // Store the fetched data
        this.buttons = this.overall.buttons;
        this.processButtons(this.buttons);
      },
      (error:any) => {
        console.error('Error fetching data:', error);
      }
    );
    }
  }

  protected processButtons(buttons: any[]) {
    // Implement in child components
  }
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports : commonimports,
  standalone: true
})
export class LandingComponent extends BaseLandingComponent {
  constructor(dataService: DatashareService) {
    super(dataService);
  }

  protected override processButtons(buttons: any[]) {
    buttons.forEach((item: any) => {
      item.name = item.name_de;
    });
  }
}

@Component({
  selector: 'app-landingen',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports : commonimports,
  standalone: true
})
export class LandingenComponent extends BaseLandingComponent {
  constructor(dataService: DatashareService) {
    super(dataService);
  }

  protected override processButtons(buttons: any[]) {
    buttons.forEach((item: any) => {
      item.name = item.name_en;
    });
  }
}
