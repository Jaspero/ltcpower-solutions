import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {CommonBlockComponent} from '@shared/blocks/blocks/common.block';

@Component({
  selector: 'jms-content',
  templateUrl: './content.component.html',
  styleUrls: [
    '../common-styles.scss',
    './content.component.scss'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent extends CommonBlockComponent {
  @Input()
  data: any;
}
