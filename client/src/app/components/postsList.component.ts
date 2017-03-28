import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Post Object */
import { Post } from '../posts';

/* Service */
import { PostService } from '../services/posts.service';

@Component({
  selector: 'post-list',
  template: `
	<ul *ngIf="posts">
	  <li *ngFor="let post of posts"><a [routerLink]="['/', post.id]"><em>no {{post.id}}</em> {{post.title}}</a></li>
	</ul>
  `
})

export class PostComponent implements OnInit {
	errorMessage: string;
	posts: Post[];
	mode: 'Observable';

	constructor (
		private postService: PostService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.postService.getPostList()
			.subscribe(
				posts => this.posts = posts,
				error => this.errorMessage = <any>error);
	}
}