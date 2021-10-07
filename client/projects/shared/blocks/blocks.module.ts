import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import {InlineEditorModule} from '@jaspero/fb-page-builder';
import {LoadClickModule, SanitizeModule} from '@jaspero/ng-helpers';
import {ProductCardComponent} from '@shared/blocks/blocks/inventory/components/product-card/product-card.component';
import {SubCategoriesCardComponent} from '@shared/blocks/blocks/inventory/components/sub-categories-card/sub-categories-card.component';
import {InventoryComponent} from '@shared/blocks/blocks/inventory/inventory.component';
import {BlockRendererComponent} from './block-renderer/block-renderer.component';
import {BackgroundHeroComponent} from './blocks/background-hero/background-hero.component';
import {CardsComponent} from './blocks/cards/cards.component';
import {CommonBlockComponent} from './blocks/common.block';
import {ContentComponent} from './blocks/content/content.component';
import {FaqComponent} from './blocks/faq/faq.component';
import {FormComponent} from './blocks/form/form.component';
import {MapComponent} from './blocks/map/map.component';
import {ThreeColumnComponent} from './blocks/three-column/three-column.component';
import {BlockLinkDirective} from './directives/block-link/block-link.directive';
import {ImageTextComponent} from './blocks/image-text/image-text.component';

export const BLOCKS = {
  content: ContentComponent,
  form: FormComponent,
  inventory: InventoryComponent,
  hero: BackgroundHeroComponent,
  faq: FaqComponent,
  cards: CardsComponent,
  map: MapComponent,
  columns: ThreeColumnComponent,
  'image-text': ImageTextComponent,
};

const B_COMPONENTS = [
  BlockRendererComponent,
  ContentComponent,
  InventoryComponent,
  BackgroundHeroComponent,
  FormComponent,
  FaqComponent,
  CardsComponent,
  MapComponent,
  ThreeColumnComponent,
  ImageTextComponent
];

@NgModule({
  declarations: [
    CommonBlockComponent,

    BlockLinkDirective,

    ProductCardComponent,
    SubCategoriesCardComponent,

  ...B_COMPONENTS
  ],
  exports: [
    ...B_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule,

    InlineEditorModule,

    SanitizeModule,
    LoadClickModule
  ]
})
export class BlocksModule { }
