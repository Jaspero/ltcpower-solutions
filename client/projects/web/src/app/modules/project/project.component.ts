import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {MatDialog} from '@angular/material/dialog';

@UntilDestroy()
@Component({
  selector: 'jms-w-project.component',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) {
  }

  @ViewChild('picture', {static: false})
  picture: TemplateRef<any>;

  dialogPicture: string;

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

  viewGallery(item) {
    this.dialogPicture = item;
    this.dialog.open( this.picture, {
      width: '1000px',
      height: '600px'
    });
  }

}
