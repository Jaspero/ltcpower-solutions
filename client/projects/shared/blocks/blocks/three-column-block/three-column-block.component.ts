import {Component, OnInit, ChangeDetectionStrategy, ElementRef, Input} from '@angular/core';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';
import {Observable} from 'rxjs';


interface Column {
  title?: string;
  image?: string;
  description?: string;
}

interface ColumnOptions extends CommonOptions {
  columns: Column[];
}

@Component({
  selector: 'jms-three-column-block',
  templateUrl: './three-column-block.component.html',
  styleUrls: ['./three-column-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreeColumnBlockComponent extends CommonBlockComponent {

  constructor(
    public el: ElementRef,
  ) {super(el); }

  @Input()
  data: ColumnOptions;


}
