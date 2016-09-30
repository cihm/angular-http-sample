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
var core_1 = require('@angular/core');
var wikisearch_1 = require('./wikisearch');
require('rxjs/add/operator/toPromise');
var ws_post_vo_invoiceNotificationThreshold_1 = require('./ws.post.vo.invoiceNotificationThreshold');
var AppComponent = (function () {
    function AppComponent(searchWiki) {
        this.searchWiki = searchWiki;
        this.getApiString = "wefw";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.invoiceNotificationThresholdWsPostVo = new ws_post_vo_invoiceNotificationThreshold_1.InvoiceNotificationThresholdWsPostVo("", "", "");
        this.callApi();
    };
    AppComponent.prototype.callApi = function () {
        var _this = this;
        this.searchWiki.getDataViaPromise("ji", 1).then(function (invoiceNotificationThresholdWsVo) {
            _this.invoiceNotificationThresholdWsVo = invoiceNotificationThresholdWsVo[0];
        });
        //will pass parameter to then block 
    };
    AppComponent.prototype.callPostApi = function () {
        var _this = this;
        this.searchWiki.postDataViaPromise(this.invoiceNotificationThresholdWsPostVo).then(function (resp) { return _this.invoiceNotificationThresholdWsPostRespVo = resp[0]; }).then(function (invoiceNotificationThresholdWsVo) { return _this.searchWiki.getDataViaPromise("ji", 1).then(function (invoiceNotificationThresholdWsVo) { return _this.invoiceNotificationThresholdWsVo = invoiceNotificationThresholdWsVo[0]; }); });
        //will pass parameter to then block 
    };
    AppComponent.prototype.extractData = function (res) {
        var body = res;
        console.log(body);
        //console.log(body[0]['id']);
        return body || {};
        //return body.data || {};
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n     <div *ngIf=\"invoiceNotificationThresholdWsVo\">\n      <h1>angular2 http get sample</h1>\n      <button (click)=\"callApi()\">callApi</button> \n      <input [(ngModel)]=\"invoiceNotificationThresholdWsVo.hintThreshold\">\n      <h1> {{invoiceNotificationThresholdWsVo.created}}</h1>\n     </div>\n     <hr>\n     <div *ngIf=\"invoiceNotificationThresholdWsVo\">\n      <h1>angular2 http post sample</h1>\n      <input [(ngModel)]=\"invoiceNotificationThresholdWsPostVo.type\" placeholder=\"type\">\n      <input [(ngModel)]=\"invoiceNotificationThresholdWsPostVo.thresholdAmount\" placeholder=\"thresholdAmount\">\n      <input [(ngModel)]=\"invoiceNotificationThresholdWsPostVo.srcProject\" placeholder=\"srcProject\">\n      <button (click)=\"callPostApi()\">callPostApi</button>\n      <hr>\n        <div *ngIf=\"invoiceNotificationThresholdWsPostRespVo && invoiceNotificationThresholdWsPostRespVo.returnStatus && invoiceNotificationThresholdWsPostRespVo.returnStatus!=='success' \">  \n        \n         <h1> error msg {{invoiceNotificationThresholdWsPostRespVo.returnStatus}}</h1>\n        </div>  \n     </div>\n     \n   \n  \n  "
        }), 
        __metadata('design:paramtypes', [wikisearch_1.HttpRequest])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map