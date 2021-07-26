import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlocksModule} from '@shared/blocks/blocks.module';
import {PageResolver} from '../../resolvers/page.resolver';
import {ProjectComponent} from './project.component';


const routes: Routes = [{
  path: ':id',
  component: ProjectComponent,
  resolve: {
    page: PageResolver
  },
  data: {
    collection: 'projects'
  }
}];

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BlocksModule,
  ]
})
export class ProjectModule { }
