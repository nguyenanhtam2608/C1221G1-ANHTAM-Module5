import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TranslateListComponent} from './translate/translate-list/translate-list.component';
import {TranslateDetailComponent} from './translate/translate-detail/translate-detail.component';


const routes: Routes = [
  {
    path: 'translate/list',
    component: TranslateListComponent
  },
  {
    path: 'translate/detail/:id',
    component: TranslateDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
