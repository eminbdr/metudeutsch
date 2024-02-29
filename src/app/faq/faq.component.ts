import { Component } from '@angular/core';
import { AccordionComponent } from '../customs/accordion/accordion.component';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionComponent,HeaderComponent,RouterLink],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
