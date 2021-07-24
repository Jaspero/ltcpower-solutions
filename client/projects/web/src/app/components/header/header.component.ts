import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {STATE} from '../../consts/state.const';
import {Page} from '../../modules/page/page.interface';

@Component({
  selector: 'ltc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  pages: Page[];
  menu = false;

  toggleMenu() {
    this.menu = !this.menu;
  }

  ngOnInit() {
    this.pages = STATE.pages.filter(page => page.header);
  }
}
