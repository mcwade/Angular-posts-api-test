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
var detail_service_1 = require("../services/detail.service");
var DetailComponent = (function () {
    function DetailComponent(detailService, activatedRoute) {
        this.detailService = detailService;
        this.activatedRoute = activatedRoute;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var postId = params['id'];
            _this.detailService.getDetail(postId)
                .subscribe(function (detail) { return _this.detail = detail; }, function (error) { return _this.errorMessage = error; });
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        selector: 'post-detail',
        template: "\n    <section>\n      <article *ngIf=\"detail\">\n        <h2>{{detail.title}}</h2>\n        <p class=\"meta\">\n          <label>ID: </label> {{detail.id}}<br />\n          <label>UserID: </label> {{detail.userId}}\n        </p>\n        <p>{{detail.body}}</p>\n\n        <button [routerLink]=\"['/']\">Return to Post List</button>\n      </article>\n\n      <div *ngIf=\"errorMessage\">\n        <h2>Oops, something went wrong</h2>\n        <p>Sorry that is not a valid post, please return to list to view all.</p>\n        <button [routerLink]=\"['/']\">View Post List</button>\n      </div>\n    </section>\n  "
    }),
    __metadata("design:paramtypes", [detail_service_1.DetailService,
        router_1.ActivatedRoute])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map