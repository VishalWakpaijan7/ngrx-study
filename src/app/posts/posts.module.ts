import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { postReducers } from './store/posts.reducer';
import { PostEffects } from './store/posts.effects';
import { PostsService } from './posts.service';

const routes: Routes = [{ path: '', component: PostsComponent }];

@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('posts',postReducers),
    EffectsModule.forFeature([PostEffects])
  ],
  providers:[PostsService]
})
export class PostsModule { }
