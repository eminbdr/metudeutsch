import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FaqComponent } from './faq/faq.component';
import { FaqenComponent } from './faq/faqen.component';
import { LandingenComponent } from './landing/landing.component';
import { QuizAComponent, QuizBComponent } from './quiz/quiz.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'main-en', component: LandingenComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'faq-en', component: FaqenComponent },
    {path: 'quiz-a', component: QuizAComponent},
    {path: 'quiz-b', component: QuizBComponent},

];
