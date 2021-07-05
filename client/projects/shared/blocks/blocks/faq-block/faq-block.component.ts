import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jms-faq-block',
  templateUrl: './faq-block.component.html',
  styleUrls: ['./faq-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
