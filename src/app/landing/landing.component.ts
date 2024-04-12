import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation,Injectable } from '@angular/core';
import { RouterLink } from '@angular/router';
import { linkClickCounter } from '../firebase.config';
import { LandingValues } from './buttons';
import { DatashareService } from '../data-share.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

/*Import Json*/
import * as data from './constants.json';


var commonimports  = [CommonModule, RouterLink,HeaderComponent,FooterComponent]

@Component({template: '',encapsulation: ViewEncapsulation.None})
export class BaseLandingComponent {
  static calendarLinkGenerator(syear:any, smonth:any, sday:any, shour:any, sminute:any, 
    fyear:any, fmonth:any, fday:any, fhour:any, fminute:any, title:any, description:any,location:any){
    return `https://calendar.google.com/calendar/u/0/r/eventedit?text=${title}&dates=${syear}${smonth}${sday}T${shour}${sminute}00/${fyear}${fmonth}${fday}T${fhour}${fminute}00&ctz=Türkiye&details=${description}&location=${location}` 
  }

  clickCounter = linkClickCounter;
  buttons: any;
  other_platforms = LandingValues.other_platforms;
  overall: any;

  constructor(protected dataService: DatashareService) {}
  ngOnInit() {
   /*this.onlineButtons() */
    this.localButtons(JSON.stringify(data));
  }

  processor(data:any){
    this.overall = data; // Store the fetched data
    this.buttons = this.overall.buttons;
    this.processButtons(this.buttons);
  }

  localButtons(data:any){
    this.processor(JSON.parse(data))
  }

  async onlineButtons() {
    {
    (await this.dataService.fetchData()).subscribe(
      (data:any) => {
        this.processor(data)
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
  standalone: true,
  encapsulation: ViewEncapsulation.None
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
