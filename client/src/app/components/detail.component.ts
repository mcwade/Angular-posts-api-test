import { Component, HostListener, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

/* Detail, Range Object */
import { Detail } from '../detail';
import { Range } from '../range';

/* Service */
import { DetailService } from '../services/detail.service';

@Component({
  selector: 'post-detail',
  template: `
    <section>
      <article *ngIf="detail">
        <h2>{{detail.title}}</h2>
        <p class="meta">
          <label>ID: </label> {{detail.id}}<br />
          <label>UserID: </label> {{detail.userId}}
        </p>
        <p>{{detail.body}}</p>

        <button [routerLink]="['/']">Return to Post List</button>
      </article>

      <div *ngIf="errorMessage">
        <h2>Oops, something went wrong</h2>
        <p>Sorry that is not a valid post, please return to list to view all.</p>
        <button [routerLink]="['/']">View Post List</button>
      </div>
    </section>
  `
})

export class DetailComponent implements OnInit {
  errorMessage: string;
  detail: Detail[];
  mode: 'Observable';

  constructor (
    private detailService: DetailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let postId = params['id'];

      this.detailService.getDetail(postId)
        .subscribe(
          detail => this.detail = detail,
          error => this.errorMessage = <any>error);
    });
  }
}
