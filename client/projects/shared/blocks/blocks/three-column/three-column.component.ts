import {ChangeDetectionStrategy, Component, ElementRef, Input} from '@angular/core';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';

interface Column {
  title?: string;
  image?: string;
  description?: string;
}

interface ColumnOptions extends CommonOptions {
  columns: Column[];
}

@Component({
  selector: 'jms-three-column',
  templateUrl: './three-column.component.html',
  styleUrls: ['./three-column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeColumnComponent extends CommonBlockComponent {
  constructor(
    public el: ElementRef,
  ) {
    super(el);
  }

  @Input()
  data: ColumnOptions;
}
