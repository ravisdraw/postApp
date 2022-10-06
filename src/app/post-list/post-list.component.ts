import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  constructor(public postServices: PostService) {}

  posts: Post[] = [];
  private postUnSub: Subscription;

  ngOnInit(): void {
    this.posts = this.postServices.getPost();
    this.postServices.postUpdatedCall().subscribe((aVariablePost) => {
      this.posts = aVariablePost;
    });
  }

  ngOnDestroy(): void {
    this.postUnSub.unsubscribe();
  }

  // @Input() posts: Post[] = [];
}
