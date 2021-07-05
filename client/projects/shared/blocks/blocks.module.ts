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
import {InventoryBlockComponent} from '@shared/blocks/blocks/inventory-block/inventory-block.component';
import { BackgroundHeroBlockComponent } from './blocks/background-hero-block/background-hero-block.component';
import { FaqBlockComponent } from './blocks/faq-block/faq-block.component';

export const BLOCKS = {
  content: ContentComponent,
  form: FormComponent,
  inventory: InventoryBlockComponent,
  hero: BackgroundHeroBlockComponent
};

const B_COMPONENTS = [
  BlockRendererComponent,
  ContentComponent,
  InventoryBlockComponent,
  BackgroundHeroBlockComponent,
  FormComponent,
];

@NgModule({
  declarations: [
    CommonBlockComponent,
    BlockLinkDirective,

    ...B_COMPONENTS,
      FaqBlockComponent,
  ],
  exports: [
    ...B_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,

    InlineEditorModule,

    SanitizeModule,
    LoadClickModule
  ]
})
export class BlocksModule { }
