import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as PostAction from "./store/posts.actions"
import { errorSelector, isLoadingSelector, postSelector } from './store/posts.selectors';
import { Observable } from 'rxjs';
import { AppStateInterface } from '../interfaces/AppStateInterface';
import { Post } from '../interfaces/posts/post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string|null>;
  posts$: Observable<Post[]>;

  constructor(private store:Store<AppStateInterface>){
    this.isLoading$ =  this.store.pipe(select(isLoadingSelector))
    this.error$ =  this.store.pipe(select(errorSelector))
    this.posts$ =  this.store.pipe(select(postSelector))
  }

  ngOnInit(): void {
    this.store.dispatch(PostAction.getPosts());
  }
}
