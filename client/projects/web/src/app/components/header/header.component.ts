import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {Page} from '../../modules/page/page.interface';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {StateService} from '@jaspero/form-builder/lib/services/state.service';

@Component({
  selector: 'ltc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    // public state: StateService,
  ) { }
  pages$: Observable<Page[]>;
  ngOnInit() {
    this.pages$ = this.afs
      .collection('pages', ref =>
        ref.where('featured', '==', true).orderBy('order', 'asc')
      )
      .get()
      .pipe(
        map(
          res =>
            res.docs.map(it => ({
              id: it.id === 'home' ? '/' : '/' + it.id,
              ...(it.data() as any)
            })) as Page[]
        ),
      );
  }
}
