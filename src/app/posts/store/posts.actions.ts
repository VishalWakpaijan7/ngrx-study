import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/interfaces/posts/post';

export const getPosts = createAction('[Post] Get Posts');

export const getPostsSuccess = createAction(
  '[Post] Get Posts Success',
  props<{ posts: Post[] }>()
);

export const getPostsError = createAction(
  '[Post] Get Posts Error',
  props<{ error: string }>()
);