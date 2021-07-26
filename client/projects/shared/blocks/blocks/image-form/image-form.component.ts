import {Component, OnInit, ChangeDetectionStrategy, ElementRef} from '@angular/core';
import {CommonBlockComponent} from '@shared/blocks/blocks/common.block';

@Component({
  selector: 'jms-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageFormComponent extends CommonBlockComponent {

  constructor(
    public el: ElementRef,
  ) {super(el); }
  data: any;

}
