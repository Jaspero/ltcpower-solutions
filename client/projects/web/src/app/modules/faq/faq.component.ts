import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {untilDestroyed} from '@ngneat/until-destroy';
import {Observable} from 'rxjs';

@Component({
  selector: 'jms-w-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {}

  activeIndex: number;
  page: any;


  ngOnInit() {
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
