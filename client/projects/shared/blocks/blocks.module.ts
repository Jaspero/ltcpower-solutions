import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {InlineEditorModule} from '@jaspero/fb-page-builder';
import {LoadClickModule, SanitizeModule} from '@jaspero/ng-helpers';
import {BlockRendererComponent} from './block-renderer/block-renderer.component';
import {CommonBlockComponent} from './blocks/common.block';
import {ContentComponent} from './blocks/content/content.component';
import {FormComponent} from './blocks/form/form.component';
import {BlockLinkDirective} from './directives/block-link/block-link.directive';
import {InventoryComponent} from '@shared/blocks/blocks/inventory/inventory.component';
import { BackgroundHeroComponent } from './blocks/background-hero/background-hero.component';
import { FaqComponent } from './blocks/faq/faq.component';
import { CardsComponent } from './blocks/cards/cards.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MapComponent } from './blocks/map/map.component';
import { ThreeColumnComponent } from './blocks/three-column/three-column.component';


export const BLOCKS = {
  content: ContentComponent,
  form: FormComponent,
  inventory: InventoryComponent,
  hero: BackgroundHeroComponent,
  faq: FaqComponent,
  cards: CardsComponent,
  map: MapComponent,
  columns: ThreeColumnComponent,
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

];

@NgModule({
  declarations: [
    CommonBlockComponent,
    BlockLinkDirective,

    ...B_COMPONENTS,
      CardsComponent,
      ThreeColumnComponent,
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
