import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';
import {background} from '@shared/blocks/utils/background';

interface Card {
  title?: string;
  subtitle?: string;
  content?: string;
  link?: string;
  linkHref?: string;
  image?: string;
  style?: 'shadow' | 'border' | '';
  background?: string;
}

interface CardOptions extends CommonOptions {
  cards: Card[];
  style: 'card-1' | 'card-2' | 'card-3',
}

@Component({
  selector: 'ltc-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent extends CommonBlockComponent {

  @Input()
  data: CardOptions;

  get addedClasses() {
    return [this.data.style];
  }

  cardStyle(card: Card) {
    return background(card);
  }

}
