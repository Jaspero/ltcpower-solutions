import {ChangeDetectionStrategy, Component, ElementRef, Input} from '@angular/core';
import {CommonBlockComponent} from '@shared/blocks/blocks/common.block';

@Component({
  selector: 'jms-background-hero',
  templateUrl: './background-hero.component.html',
  styleUrls: ['./background-hero.component.scss',
  '../common-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundHeroComponent extends CommonBlockComponent {
  constructor(
    public el: ElementRef,
  ) {super(el); }
  data: any;
}
