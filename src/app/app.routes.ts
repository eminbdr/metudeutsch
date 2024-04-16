import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FaqComponent,FaqenComponent } from './faq/faq_base.component';
import { LandingenComponent } from './landing/landing.component';
import { StarterkitComponent } from './starterkit/starterkit.component';
import { RedirectorComponent } from './redirector/redirector.component';
import { WortschatzComponent } from './wortschatz/wortschatz.component';


export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'main-en', component: LandingenComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'faq-en', component: FaqenComponent },
    { path: 'starter-kit', component:  StarterkitComponent},
    { path: 'redirector', component: RedirectorComponent},
    { path: 'wortschatz', component: WortschatzComponent}
];
