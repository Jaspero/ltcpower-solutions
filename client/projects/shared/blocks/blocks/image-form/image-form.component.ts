import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'jms-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
