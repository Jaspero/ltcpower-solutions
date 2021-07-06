import {Component, OnInit, ChangeDetectionStrategy, ElementRef} from '@angular/core';
import {CommonBlockComponent} from '@shared/blocks/blocks/common.block';


@Component({
  selector: 'jms-map-block',
  templateUrl: './map-block.component.html',
  styleUrls: ['./map-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapBlockComponent extends CommonBlockComponent  {

  constructor(
    public el: ElementRef,
  ) {super(el); }
  data: any;
}
