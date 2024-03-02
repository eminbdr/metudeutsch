import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FaqComponent } from './faq/faq.component';
import { FaqenComponent } from './faq/faqen.component';
export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'faq-component', component: FaqComponent },
    { path: 'faq-en-component', component: FaqenComponent },
];
