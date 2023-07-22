import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PostActions from './posts.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PostsService } from '../posts.service';

@Injectable()
export class PostEffects {
  getPost$ = createEffect(() => {
    return this.action$.pipe(
      ofType(PostActions.getPosts),
      mergeMap(() => {
        return this.postSvc.getPost().pipe(
          map((post) => PostActions.getPostsSuccess({ posts: post })),
          catchError((err) => of(PostActions.getPostsError({ error: err.message })))
        );
      })
    );
  });

  constructor(private action$: Actions, private postSvc: PostsService) {}
}
