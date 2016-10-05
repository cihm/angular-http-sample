import {Http, Response } from '@angular/http';
import { Component, OnInit} from '@angular/core';
import { HttpRequest } from './http-request.service';
import 'rxjs/add/operator/toPromise';

import { InvoiceNotificationThresholdWsVo } from './invoice-notification-threshold-ws-vo';
import { InvoiceNotificationThresholdWsPostVo } from './invoice-notification-threshold-ws-post-vo'
import { InvoiceNotificationThresholdWsPostRespVo} from './invoice-notification-threshold-ws-post-resp-vo'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  invoiceNotificationThresholdWsVo: InvoiceNotificationThresholdWsVo;
  invoiceNotificationThresholdWsPostVo: InvoiceNotificationThresholdWsPostVo
  invoiceNotificationThresholdWsPostRespVo: InvoiceNotificationThresholdWsPostRespVo


  getApiString = "wefw";

  constructor(
    private searchWiki: HttpRequest) {

  }
  ngOnInit(): void {
    this.invoiceNotificationThresholdWsPostVo = new InvoiceNotificationThresholdWsPostVo("", "", "");
    this.callApi();
  }

  callApi() {

    this.searchWiki.getDataViaPromise("ji", 1).then(invoiceNotificationThresholdWsVo => {
      this.invoiceNotificationThresholdWsVo = invoiceNotificationThresholdWsVo[0];
    }

    );

    //will pass parameter to then block 
  }

  callPostApi() {

    this.searchWiki.postDataViaPromise(this.invoiceNotificationThresholdWsPostVo).then(resp => this.invoiceNotificationThresholdWsPostRespVo = resp[0]).then(invoiceNotificationThresholdWsVo => this.searchWiki.getDataViaPromise("ji", 1).then(invoiceNotificationThresholdWsVo => this.invoiceNotificationThresholdWsVo = invoiceNotificationThresholdWsVo[0]));

    //will pass parameter to then block 
  }

  private extractData(res: any[]) {
    let body = res;
    console.log(body);
    //console.log(body[0]['id']);

    return body || {};
    //return body.data || {};
  }

}