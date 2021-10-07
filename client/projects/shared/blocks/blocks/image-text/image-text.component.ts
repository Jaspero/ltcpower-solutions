import {ChangeDetectionStrategy, Component, ElementRef} from '@angular/core';
import {CommonBlockComponent} from '@shared/blocks/blocks/common.block';

@Component({
  selector: 'jms-image-text',
  templateUrl: './image-text.component.html',
  styleUrls: ['./image-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageTextComponent  extends CommonBlockComponent {
  constructor(
    public el: ElementRef,
  ) {super(el); }

  data: any;
}
