import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AccordionEnComponent } from '../customs/accordion-en/accordion-en.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-faqen',
  standalone: true,
  imports: [HeaderComponent,AccordionEnComponent,RouterLink],
  templateUrl: './faqen.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqenComponent {

}
