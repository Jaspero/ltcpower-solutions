import {Injector} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {STATE} from './consts/state.const';

export async function appInit(injector: Injector) {

  const afs = injector.get(AngularFirestore);

  STATE.pages = (await afs.collection('pages', ref => ref.orderBy('order', 'asc'))
    .get()
    .toPromise()).docs.map(doc => ({
      id: doc.id,
      ...doc.data() as any
    }));

  return Promise.resolve();
}
