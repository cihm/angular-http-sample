import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import { InvoiceNotificationThresholdWsVo } from './ws.vo.invoiceNotificationThreshold';
import { InvoiceNotificationThresholdWsPostVo } from './ws.post.vo.invoiceNotificationThreshold'

import myGlobals = require('./global.path'); //<==== this one

@Injectable()
export class HttpRequest {
    constructor(private http: Http) { }

    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

    private wsUrl: string=myGlobals.wsUrl; 
    private postUrl: string=myGlobals.postUrl; 

    getDataViaPromise(term: string, aa: number): Promise<InvoiceNotificationThresholdWsVo[]> {
     console.log(this.wsUrl);   
        return this.http.get(myGlobals.wsUrl)
            .toPromise()
            .then((response) => response.json() as InvoiceNotificationThresholdWsVo[])
            //.then(this.extractData )
            .catch(this.handleError);
    }

    postDataViaPromise(invoiceNotificationThresholdWsPostVo: InvoiceNotificationThresholdWsPostVo): Promise<any[]> {


        return this.http
            .post(this.postUrl, this.httpPostNVP(invoiceNotificationThresholdWsPostVo).toString(), { headers: this.headers })
            .toPromise()
            .then((response) => response.json() as any[])
            //.then(this.extractData )
            .catch(this.handleError);
    }


    private httpPostNVP(obj: Object): URLSearchParams {
        let content = new URLSearchParams();
        for (var i in Object.keys(obj)) {
            var key = Object.keys(obj)[i];
            content.set(key, obj[key]);
        }
        return content
    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        console.log(body as InvoiceNotificationThresholdWsVo[]);
        //console.log(body[0]['id']);
        return body || {};
        //return body.data || {};
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getData(term: string) {
        return this.http.get(
            this.wsUrl
        ).map((response) => response.json())
            .subscribe(
            function (response) { console.log(response) },
            function (error) { console.log("Error happened" + error) },
            function () { console.log("the subscription is completed") }
            );

    }



    search(term: string) {
        return this.http.get(
            this.wsUrl
        )
            .subscribe(
            function (response) { console.log(response) },
            function (error) { console.log("Error happened" + error) },
            function () { console.log("the subscription is completed") }
            );

    }

    searchXML(term: string): Observable<any> {
        return this.http.get(
            'https://en.wikipedia.org/w/api.php?' +
            'action=query&list=search&format=xmlfm&srsearch=' + term
        );
    }
}