import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"metudeutsch","appId":"1:812486750712:web:3535fc315443f18caea60d","storageBucket":"metudeutsch.appspot.com","apiKey":"AIzaSyBCPTa-i7eWI6PG697Rj_umCchU9_OgbF8","authDomain":"metudeutsch.firebaseapp.com","messagingSenderId":"812486750712","measurementId":"G-0XZVLBDTSZ"}))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService,]
};
