import {Location} from '@angular/common';
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {Model} from '@shared/interfaces/model.interface';

@UntilDestroy()
@Component({
  selector: 'ltc-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private location: Location
  ) {}

  page: Model;

  ngOnInit() {
    this.page = this.activatedRoute.snapshot.data.page;

    this.page.specifications = this.page.specifications.map(it => {
      it.active = true;
      return it;
    });

    this.activatedRoute.data
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(({page}) => {
        this.page = page;
        this.cdr.markForCheck();
      });
  }

  back() {
    this.location.back();
  }
}
