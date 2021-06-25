import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';

@Component({
  selector: 'jms-inventory-block',
  templateUrl: './inventory-block.component.html',
  styleUrls: ['./inventory-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryBlockComponent extends CommonBlockComponent {

  @Input()
  data: any;

}
