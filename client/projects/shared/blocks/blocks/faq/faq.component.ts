import {ChangeDetectionStrategy, Component, ElementRef, Input, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {CommonBlockComponent} from '@shared/blocks/blocks/common.block';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Page} from '../../../../web/src/app/modules/page/page.interface';

@Component({
  selector: 'jms-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent extends CommonBlockComponent implements OnInit {
  constructor(
    public el: ElementRef,
    private afs: AngularFirestore
  ) {
    super(el);
  }

  @Input()
  data: any;
  activeIndex: number;

  faq$: Observable<any[]>;

  ngOnInit() {
    this.faq$ = this.afs
      .collection('faq')
      .get()
      .pipe(
        map(
          res =>
            res.docs.map(it => ({
              id: it.id === 'home' ? '/' : '/' + it.id,
              ...(it.data() as any)
            })) as Page[]
        )
      );
  }
}
