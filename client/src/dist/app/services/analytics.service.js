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
var AnalyticsService = (function () {
    function AnalyticsService(http) {
        this.http = http;
        this.rangeUrl = 'http://kargotest.herokuapp.com/api/trackers?from=2015-01-01&to=2015-03-01';
    }
    AnalyticsService.prototype.getRange = function () {
        return this.http.get(this.rangeUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AnalyticsService.prototype.extractData = function (res) {
        var body = res.json();
        // console.log('body',body)
        function compare(a, b) {
            if (a.id < b.id)
                return -1;
            if (a.id > b.id)
                return 1;
            return 0;
        }
        // let testDates = [];
        // testDates.push(eachDay(
        // 	new Date(2015, 1, 1),
        // 	new Date(2015, 3, 1)
        // ));
        // console.log(testDates);
        var startOfDay = require('node_modules/date-fns/date-fns/start_of_day');
        // import { startOfDay } from 'date-fns/start_of_day';
        // The start of a day for 2 September 2014 11:55:00:
        var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0));
        console.log(result);
        // let dates = [new Date(1995, 6, 2), new Date(1987, 1, 11), new Date(1989, 6, 10)];
        // console.log(dates.sort(dateFns.compareAsc))
        // let sortedData = body.data.sort(function(a,b){return a.id - b.id})
        // let sortedData = body.data.sort(compare)
        // let newData = [];
        // var prevId = 0;
        // let prevDate = 0;
        // for (let i = 0; i < sortedData.length; i++) {
        // 	let date = sortedData[i].date;
        // 	let hits = sortedData[i].hits;
        // 	let id = sortedData[i].id;
        // 	console.log('\nprev id',prevId);
        // 	console.log('index',i);
        // 	console.log('true id',id);
        // 	if (id !== prevId+1) {
        // 		let item = {
        // 			date: "test";
        // 			hits: "0";
        // 			id: i;
        // 		}
        // 		prevId = i;
        // 		console.log('id non-sequential', id)
        // 		newData.push(item);
        // 	} else {
        // 		newData.push(sortedData[i]);
        // 		prevId = id;
        // 	}
        // }
        // console.log('data reordered', sortedData)
        // console.log('newData', newData)
        return body || {};
    };
    AnalyticsService.prototype.handleError = function (error) {
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
    return AnalyticsService;
}());
AnalyticsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
//# sourceMappingURL=analytics.service.js.map