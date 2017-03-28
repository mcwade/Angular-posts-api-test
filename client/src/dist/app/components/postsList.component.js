"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
/* Service */
var posts_service_1 = require("../services/posts.service");
var PostComponent = (function () {
    function PostComponent(postService, router) {
        this.postService = postService;
        this.router = router;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPostList()
            .subscribe(function (posts) { return _this.posts = posts; }, function (error) { return _this.errorMessage = error; });
    };
    return PostComponent;
}());
PostComponent = __decorate([
    core_1.Component({
        selector: 'post-list',
        template: "\n\t<ul *ngIf=\"posts\">\n\t  <li *ngFor=\"let post of posts\"><a [routerLink]=\"['/', post.id]\"><em>no {{post.id}}</em> {{post.title}}</a></li>\n\t</ul>\n  "
    }),
    __metadata("design:paramtypes", [posts_service_1.PostService,
        router_1.Router])
], PostComponent);
exports.PostComponent = PostComponent;
//# sourceMappingURL=postsList.component.js.map