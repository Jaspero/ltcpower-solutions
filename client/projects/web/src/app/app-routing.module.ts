import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'project',
    loadChildren: () =>
      import('./modules/project/project.module')
        .then(a => a.ProjectModule)
  },
  {
    path: 'Faq',
    loadChildren: () =>
      import('./modules/faq/faq.module')
        .then(a => a.FaqModule)
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/page/page.module')
        .then(a => a.PageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
