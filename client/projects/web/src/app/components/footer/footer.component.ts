import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Page} from '../../modules/page/page.interface';

@Component({
  selector: 'ltc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  constructor(
    private afs: AngularFirestore
  ) { }

  year = new Date().getFullYear();

  pages$: Observable<Page[]>;

  ngOnInit() {
    this.pages$ = this.afs
      .collection('pages', ref =>
        ref.where('footer', '==', true).orderBy('order', 'asc')
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
