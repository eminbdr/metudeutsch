import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FaqComponent } from './faq/faq.component';
import { FaqenComponent } from './faq/faqen.component';
import { LandingenComponent } from './landing/landing.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'main-en', component: LandingenComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'faq-en', component: FaqenComponent },
];
