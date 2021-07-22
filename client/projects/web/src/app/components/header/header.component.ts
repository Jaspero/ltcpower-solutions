import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Page} from '../../modules/page/page.interface';

@Component({
  selector: 'ltc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor(
    private afs: AngularFirestore
  ) { }

  pages$: Observable<Page[]>;

  menu = false;

  toggleMenu() {
    this.menu = !this.menu;
  }

  ngOnInit() {
    this.pages$ = this.afs
      .collection('pages', ref =>
        ref.where('header', '==', true).orderBy('order', 'asc')
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
