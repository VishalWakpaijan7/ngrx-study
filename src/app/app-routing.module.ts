import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full",
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
  { path: 'rxjs', loadChildren: () => import('./rxjs-module/rxjs-module.module').then(m => m.RxjsModuleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
