import {Component, OnInit, ChangeDetectionStrategy, Input, ElementRef} from '@angular/core';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';
import {AngularFirestore} from '@angular/fire/firestore';
import {Router} from '@angular/router';
import {map, tap} from 'rxjs/operators';
import {Page} from '../../../../web/src/app/modules/page/page.interface';
import {Observable} from 'rxjs';

@Component({
  selector: 'jms-inventory-block',
  templateUrl: './inventory-block.component.html',
  styleUrls: ['./inventory-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryBlockComponent extends CommonBlockComponent implements OnInit {
  constructor(
    public el: ElementRef,
    private afs: AngularFirestore,
  ) { super(el); }

  @Input()
    data: any;

  categories$: Observable<any[]>;

  ngOnInit() {
    this.categories$ = this.afs
      .collection('categories')
      .get()
      .pipe(
        map(
          res =>
            res.docs.map(it => ({
              id: it.id === 'home' ? '/' : '/' + it.id,
              ...(it.data() as any)
            })) as Page[]
        ),
        tap(console.log)
      );
  }
}
