import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlocksModule} from '@shared/blocks/blocks.module';
import {PageResolver} from '../../resolvers/page.resolver';
import {ProductComponent} from './product.component';

const routes: Routes = [{
  path: ':id',
  component: ProductComponent,
  resolve: {
    page: PageResolver
  },
  data: {
    collection: 'models'
  }
}];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlocksModule,
  ]
})
export class ProductModule { }
