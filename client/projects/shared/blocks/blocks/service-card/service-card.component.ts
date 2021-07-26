import {Component, OnInit, ChangeDetectionStrategy, ElementRef, Input, ViewChild, TemplateRef} from '@angular/core';
import {CommonBlockComponent, CommonOptions} from '@shared/blocks/blocks/common.block';
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
  style: 'card-1' | 'card-2' | 'card-3'
}


@Component({
  selector: 'jms-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCardComponent extends CommonBlockComponent {
  constructor(
    public el: ElementRef,
    private dialog: MatDialog,
  ) {super(el); }

  @ViewChild('serviceDialog', {static: false})
  serviceDialog: TemplateRef<any>;

  serviceDescription: string;
  serviceTitle: string;

  @Input()
  data: CardOptions;

  openDialog(card) {
    this.serviceDescription = card.description;
    this.serviceTitle = card.title;
    this.dialog.open( this.serviceDialog, {
      width: '600px',
      height: 'auto'
    });
  }
}
