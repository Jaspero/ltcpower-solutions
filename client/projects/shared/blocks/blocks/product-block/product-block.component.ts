import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jms-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
