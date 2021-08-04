import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {FAQ} from '@shared/interfaces/faq.interface';
import {Observable} from 'rxjs';
import {Page} from '../page/page.interface';

@UntilDestroy()
@Component({
  selector: 'jms-w-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private afs: AngularFirestore,
    private cdr: ChangeDetectorRef,
  ) {}

  activeIndex: number;
  page: Page;
  faq$: Observable<FAQ[]>;

  ngOnInit() {
    this.faq$ = this.afs.collection<FAQ>('faq')
      .valueChanges();

    this.page = this.activatedRoute.snapshot.data.page;

    this.activatedRoute.data
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(({page}) => {
        this.page = page;
        this.cdr.markForCheck();
      });
  }
}
