import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(public postServices: PostService) {}

  ngOnInit(): void {}

  //@Output is a decorator
  // @Output() postCreated = new EventEmitter<Post>();

  addPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // const posts: Post = {
    //   title: form.value.title,
    //   content: form.value.content,
    // };
    // this.postCreated.emit(posts);
    this.postServices.setPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
