import {ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';
import {background} from '@shared/blocks/utils/background';

interface Card {
  title?: string;
  subtitle?: string;
  content?: string;
  link?: string;
  linkHref?: string;
  image?: string;
  background?: string;
}

interface CardOptions extends CommonOptions {
  cards: Card[];
  title: string;
}

@Component({
  selector: 'ltc-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent extends CommonBlockComponent {
  constructor(
    public el: ElementRef,
    private dialog: MatDialog,
  ) {
    super(el);
  }

  @ViewChild('dialogDescription')
  dialogDescription: TemplateRef<any>;

  fullDescription: string;
  dialogImage: string;

  @Input()
  data: CardOptions;

  cardStyle(card: Card) {
    return background(card);
  }

  viewDescription(card) {
    this.fullDescription = card.description;
    this.dialogImage = card.image;
    this.dialog.open( this.dialogDescription, {
      width: '600px',
      height: 'auto'
    });
  }

}
