import 'isomorphic-fetch';
import { Promise } from 'es6-promise';
import * as qs     from 'qs';

/**
 * wrapper class of fetch API
 */
export class HttpClient {
    private headers: {}

    getHeader(key: string): string {
        return this.headers[key];
    }

    setHeader(key: string, value: string): void {
        this.headers[key] = value;
    }

    get(url: string, query?: {[key:string]: string}): Promise<IResponse> {
        //TODO: make querystring
        return fetch(url, {
          method: 'GET',
          headers: this.headers
        });
    }

    post(body: any, url: string, query?: {[key:string]: string}): Promise<IResponse> {
        //TODO: make querystring
        return fetch(url, {
          method: 'POST',
          headers: this.headers
        });
    }
}
