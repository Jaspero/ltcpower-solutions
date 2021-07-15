import {Component, OnInit, ChangeDetectionStrategy, ElementRef} from '@angular/core';
import {CommonBlockComponent} from '@shared/blocks/blocks/common.block';


@Component({
  selector: 'jms-map-block',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent extends CommonBlockComponent  {

  constructor(
    public el: ElementRef,
  ) {super(el); }
  data: any;
}
