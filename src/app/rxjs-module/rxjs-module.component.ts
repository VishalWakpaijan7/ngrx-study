import { HttpService } from './../services/http.service';
import { Post } from 'src/app/interfaces/posts/post';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Observable, of, from, delay, mergeMap, switchMap, concatMap, exhaustMap } from 'rxjs';

interface PostDetailsInterface {
  id: 1;
  title: string;
  author: string;
  year:string;
}

@Component({
  selector: 'app-rxjs-module',
  templateUrl: './rxjs-module.component.html',
  styleUrls: ['./rxjs-module.component.scss'],
})
export class RxjsModuleComponent implements OnInit {
  number$: Observable<number> = from([1, 2, 3, 4, 5]).pipe(map((v) => v * 10));

  constructor(private httpSvc:HttpService) {
    const example = (operator: any) => () => {
      from([0, 1, 2, 3, 4])
        .pipe(operator((x: any) => of(x).pipe(delay(500))))
        .subscribe(
          console.log,
          () => {},
          () => console.log(`${operator.name} completed`)
        );
    };
    // example(switchMap)();

    const postDetails = this.getPosts(1).pipe(
      concatMap((post) => this.getPostDetails(post))
    )
    postDetails.subscribe((post) => console.log(post))
  };

  ngOnInit(): void {}

  getPosts(id:number): Observable<Post> { 
   return this.httpSvc.get('posts').pipe( map(d => {
     return d.filter((d:Post) => d.id === id)
   }) );
  }
  
  getPostDetails(post:Post) :Observable<{id:number,year:string}> {
    return of({id: post.id, year : '2020'})
  }

}