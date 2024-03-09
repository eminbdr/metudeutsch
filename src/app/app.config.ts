import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"metudeutsch","appId":"1:812486750712:web:3535fc315443f18caea60d","storageBucket":"metudeutsch.appspot.com","apiKey":"AIzaSyBCPTa-i7eWI6PG697Rj_umCchU9_OgbF8","authDomain":"metudeutsch.firebaseapp.com","messagingSenderId":"812486750712","measurementId":"G-0XZVLBDTSZ"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(providePerformance(() => getPerformance())), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"metudeutsch","appId":"1:812486750712:web:3535fc315443f18caea60d","storageBucket":"metudeutsch.appspot.com","apiKey":"AIzaSyBCPTa-i7eWI6PG697Rj_umCchU9_OgbF8","authDomain":"metudeutsch.firebaseapp.com","messagingSenderId":"812486750712","measurementId":"G-0XZVLBDTSZ"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase())), importProvidersFrom(provideFunctions(() => getFunctions())), importProvidersFrom(provideMessaging(() => getMessaging())), importProvidersFrom(providePerformance(() => getPerformance())), importProvidersFrom(provideStorage(() => getStorage())), importProvidersFrom(provideRemoteConfig(() => getRemoteConfig()))]
};
