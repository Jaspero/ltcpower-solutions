import {APP_INITIALIZER, Injector, NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule, USE_EMULATOR as USE_FIRESTORE_EMULATOR} from '@angular/fire/firestore';
import {USE_EMULATOR as USE_FUNCTIONS_EMULATOR} from '@angular/fire/functions';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ENV_CONFIG} from '../../../../env-config';
import {environment} from '../environments/environment';
import {appInit} from './app-init';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FaqComponent } from './modules/faq/faq.component';


export function init(injector: Injector) {
  return () => {
    return appInit(injector);
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DynamicFormComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(ENV_CONFIG.firebase),
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.firebaseEmulators ? ['localhost', 7000] : undefined
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: environment.firebaseEmulators ? ['localhost', 5000] : undefined
    },
    {
      provide: APP_INITIALIZER,
      useFactory: init,
      deps: [Injector],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
