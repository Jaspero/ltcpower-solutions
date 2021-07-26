import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlocksModule} from '@shared/blocks/blocks.module';
import {PageResolver} from '../../resolvers/page.resolver';
import {FaqComponent} from './faq.component';

const routes: Routes = [{
  path: ':id',
  component: FaqComponent,
  resolve: {
    page: PageResolver
  },
  data: {
    collection: 'faq',
  }
}];

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlocksModule,
  ]
})
export class FaqModule { }
