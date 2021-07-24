import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlocksModule} from '@shared/blocks/blocks.module';
import {PageResolver} from '../../resolvers/page.resolver';
import {PageComponent} from './page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    resolve: {
      page: PageResolver
    },
    data: {
      id: 'Home',
      collection: 'pages'
    }
  },
  {
    path: ':id',
    component: PageComponent,
    resolve: {
      page: PageResolver
    },
    data: {
      collection: 'pages'
    }
  }
];

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlocksModule,
  ]
})
export class PageModule { }
