import { createReducer, on } from '@ngrx/store';
import { PostStateInterface } from 'src/app/interfaces/posts/post';
import * as PostsActions from './posts.actions';

export const initialState: PostStateInterface = {
  isLoading: false,
  posts: [],
  error: null,
};

export const postReducers = createReducer(
  initialState,
  on(PostsActions.getPosts, (state) => ({ ...state, isLoading: true })),
  on(PostsActions.getPostsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.posts,
  })),
  on(PostsActions.getPostsError, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
