import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonBlockComponent} from '@shared/blocks/blocks/common.block';

@Component({
  selector: 'jms-background-hero-block',
  templateUrl: './background-hero.component.html',
  styleUrls: ['./background-hero.component.scss',
  '../common-styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackgroundHeroComponent extends CommonBlockComponent  {
  @Input()
  data: {
    title?: string;
    subtitle?: string;
    description?: string;
    background?: string;
    center?: boolean;
  };
}
