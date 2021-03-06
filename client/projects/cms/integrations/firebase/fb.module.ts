import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {USE_EMULATOR as USE_AUTH_EMULATOR} from '@angular/fire/auth';
import {USE_EMULATOR as USE_FIRESTORE_EMULATOR} from '@angular/fire/firestore';
import {USE_EMULATOR as USE_FUNCTIONS_EMULATOR} from '@angular/fire/functions';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireFunctionsModule, ORIGIN, REGION} from '@angular/fire/functions';
import {AngularFirePerformanceModule} from '@angular/fire/performance';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {DbService} from '../../src/app/shared/services/db/db.service';
import {environment} from '../../src/environments/environment';
import {FbDatabaseService} from './fb-database.service';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireAuthGuardModule,
    AngularFirePerformanceModule,
    AngularFireFunctionsModule
  ]
})
export class FirebaseModule {
  constructor(@Optional() @SkipSelf() parentModule: FirebaseModule) {
    if (parentModule) {
      throw new Error(
        'FirebaseModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders<FirebaseModule> {
    return {
      ngModule: FirebaseModule,
      providers: [
        FbDatabaseService,
        {
          provide: DbService,
          useClass: FbDatabaseService
        },
        {
          provide: REGION,
          useValue: 'us-central1'
        },
        {
          provide: ORIGIN,
          useValue: environment.origin
        },

        {
          provide: USE_AUTH_EMULATOR,
          useValue: environment.firebaseEmulators ? ['localhost', 9099] : undefined
        },
        {
          provide: USE_FIRESTORE_EMULATOR,
          useValue: environment.firebaseEmulators ? ['localhost', 7000] : undefined
        },
        {
          provide: USE_FUNCTIONS_EMULATOR,
          useValue: environment.firebaseEmulators ? ['localhost', 5000] : undefined
        },
      ]
    };
  }
}
