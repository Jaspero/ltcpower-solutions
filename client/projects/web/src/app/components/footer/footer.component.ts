import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Page} from '../../modules/page/page.interface';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

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
        ref.where('footerLink', '==', true).orderBy('order', 'asc')
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
