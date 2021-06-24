import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jms-inventory-block',
  templateUrl: './inventory-block.component.html',
  styleUrls: ['./inventory-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
