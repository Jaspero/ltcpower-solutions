import {Component, OnInit,  ChangeDetectionStrategy, ElementRef, Input} from '@angular/core';
import {CommonBlockComponent} from '@shared/blocks/blocks/common.block';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {Page} from '../../../../web/src/app/modules/page/page.interface';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'jms-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent extends CommonBlockComponent implements OnInit  {
  constructor(
    public el: ElementRef,
    private afs: AngularFirestore
  ) {super(el); }

  @Input()
  data: any;

  projects$: Observable<any[]>;


  ngOnInit() {
    this.projects$ = this.afs
      .collection('projects')
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
