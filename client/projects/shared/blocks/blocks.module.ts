import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {RouterModule} from '@angular/router';
import {InlineEditorModule} from '@jaspero/fb-page-builder';
import {LoadClickModule, SanitizeModule} from '@jaspero/ng-helpers';
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
import { ServiceCardComponent } from './blocks/service-card/service-card.component';
import { ImageTextComponent } from './blocks/image-text/image-text.component';
import { ProjectsComponent } from './blocks/projects/projects.component';
import { ImageFormComponent } from './blocks/image-form/image-form.component';

export const BLOCKS = {
  content: ContentComponent,
  form: FormComponent,
  hero: BackgroundHeroComponent,
  faq: FaqComponent,
  cards: CardsComponent,
  map: MapComponent,
  columns: ThreeColumnComponent,
  'service-card': ServiceCardComponent,
  'image-text': ImageTextComponent,
  'image-form': ImageFormComponent,
  projects: ProjectsComponent,
};

const B_COMPONENTS = [
  BlockRendererComponent,
  ContentComponent,
  BackgroundHeroComponent,
  FormComponent,
  FaqComponent,
  CardsComponent,
  MapComponent,
  ThreeColumnComponent,
  ServiceCardComponent,
  ImageTextComponent,
  ImageFormComponent,
  ProjectsComponent
];

@NgModule({
  declarations: [
    CommonBlockComponent,

    BlockLinkDirective,

  ...B_COMPONENTS,
    ServiceCardComponent,
    ImageTextComponent,
    ProjectsComponent,
    ImageFormComponent,
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
