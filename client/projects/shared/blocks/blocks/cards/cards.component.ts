import {Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, TemplateRef, ElementRef} from '@angular/core';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';
import {background} from '@shared/blocks/utils/background';
import {MatDialog} from '@angular/material/dialog';

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

  constructor(
    public el: ElementRef,
    private dialog: MatDialog,
  ) {super(el); }

  @ViewChild('dialogDescription')
  dialogDescription: TemplateRef<any>;

  fullDescription: string;
  dialogImage: string;

  @Input()
  data: CardOptions;

  get addedClasses() {
    return [this.data.style];
  }

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
