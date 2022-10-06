import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();

  getPost() {
    // return [...this.posts]; //Will copy the array;
    this.http
      .get<{ message: string; posts: Post[] }>(
        'http://localhost:3000/api/posts'
      )
      .subscribe((postsData) => {
        this.posts = postsData.posts;
        this.postUpdated.next([...this.posts]);
      });
  }

  postUpdatedCall() {
    return this.postUpdated.asObservable();
  }

  setPost(title: string, content: string) {
    const post: Post = {
      id: null,
      title: title,
      content: content,
    };

    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
