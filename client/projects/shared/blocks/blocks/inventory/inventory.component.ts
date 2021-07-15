import {Component, OnInit, ChangeDetectionStrategy, Input, ElementRef} from '@angular/core';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {map, takeUntil, tap} from 'rxjs/operators';
import {Page} from '../../../../web/src/app/modules/page/page.interface';
import {BehaviorSubject, Observable} from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'jms-inventory-block',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent extends CommonBlockComponent implements OnInit {
  constructor(
    public el: ElementRef,
    private afs: AngularFirestore,
    private activatedRoute: ActivatedRoute
  ) { super(el); }

  @Input()
    data: any;
  selectedProduct$: BehaviorSubject<Partial<any>>;
  categories$: Observable<any[]>;
  subCategories$: Observable<any[]>;
  selectedCat: FormControl;
  selectedSubcat: FormControl;

  ngOnInit() {
    const {queryParams} = this.activatedRoute.snapshot;

    this.selectedCat = new FormControl(
      queryParams.category || ''
    );

    this.selectedSubcat = new FormControl(
      queryParams.sc || ''
    );

    this.activatedRoute.queryParams
      .pipe(
        // takeUntil(this.destroyed$)
      )
      .subscribe(value => {
        this.selectedCat.setValue(value.category || '');

        this.selectedSubcat.setValue(value.sc || '');

        this.selectedProduct$.next(value.product ? {
          id: value.product,
          title: value.productTitle
        } : null);
      });

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

    this.subCategories$ = this.afs
      .collection('subCategories')
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
