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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var analyticService = (function () {
    function analyticService(http) {
        this.http = http;
        this.rangeUrl = 'http://kargotest.herokuapp.com/api/trackers?from=2015-01-01&to=2015-03-01';
    }
    analyticService.prototype.getRange = function (postId) {
        return this.http.get(rangeUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    analyticService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    analyticService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    return analyticService;
}());
analyticService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], analyticService);
exports.analyticService = analyticService;
//# sourceMappingURL=analytic.service.js.map