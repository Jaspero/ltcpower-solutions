import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {STATE} from '../../consts/state.const';
import {Page} from '../../modules/page/page.interface';

@Component({
  selector: 'ltc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  constructor() { }

  year = new Date().getFullYear();

  pages: Page[];

  ngOnInit() {
    this.pages = STATE.pages.filter(page => page.footer);
  }
}
