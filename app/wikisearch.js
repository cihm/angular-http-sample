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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
var HttpRequest = (function () {
    function HttpRequest(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.wsUrl = 'http://210.80.86.148:8080/eInvoiceNumberService/backend/invoiceNotificationThreshold?srcProject=abStoreWeekend&type=triplicateUniformInvoice';
        this.postUrl = 'http://210.80.86.148:8080/eInvoiceNumberService/backend/invoiceNotificationThreshold';
    }
    HttpRequest.prototype.getDataViaPromise = function (term, aa) {
        return this.http.get(this.wsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpRequest.prototype.postDataViaPromise = function (invoiceNotificationThresholdWsPostVo) {
        return this.http
            .post(this.postUrl, this.httpPostNVP(invoiceNotificationThresholdWsPostVo).toString(), { headers: this.headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpRequest.prototype.httpPostNVP = function (obj) {
        var content = new http_1.URLSearchParams();
        for (var i in Object.keys(obj)) {
            var key = Object.keys(obj)[i];
            content.set(key, obj[key]);
        }
        return content;
    };
    HttpRequest.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        console.log(body);
        //console.log(body[0]['id']);
        return body || {};
        //return body.data || {};
    };
    HttpRequest.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    HttpRequest.prototype.getData = function (term) {
        return this.http.get(this.wsUrl).map(function (response) { return response.json(); })
            .subscribe(function (response) { console.log(response); }, function (error) { console.log("Error happened" + error); }, function () { console.log("the subscription is completed"); });
    };
    HttpRequest.prototype.search = function (term) {
        return this.http.get(this.wsUrl)
            .subscribe(function (response) { console.log(response); }, function (error) { console.log("Error happened" + error); }, function () { console.log("the subscription is completed"); });
    };
    HttpRequest.prototype.searchXML = function (term) {
        return this.http.get('https://en.wikipedia.org/w/api.php?' +
            'action=query&list=search&format=xmlfm&srsearch=' + term);
    };
    HttpRequest = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpRequest);
    return HttpRequest;
}());
exports.HttpRequest = HttpRequest;
//# sourceMappingURL=wikisearch.js.map