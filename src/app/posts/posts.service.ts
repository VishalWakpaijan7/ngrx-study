import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { Post } from '../interfaces/posts/post';
import { HttpService } from '../services/http.service';

@Injectable()

export class PostsService {

  constructor(private httpSvc:HttpService) { }

  getPost() : Observable<Post[]> {
    return this.httpSvc.get('posts').pipe(delay(1000));
  }

}
