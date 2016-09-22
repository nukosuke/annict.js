import 'isomorphic-fetch';
import { Promise } from 'es6-promise';
import * as qs     from 'qs';

/**
 * wrapper class of fetch API
 */
export class HttpClient {
    private headers: {[index:string]: string} = {
        'Accept'       : 'application/json',
        'Content-Type' : 'application/json',
        'User-Agent'   : 'annict.js',
    };

    getHeader( key: string ): string {
        return this.headers[key];
    }

    setHeader( key: string, value: string ): void {
        this.headers[key] = value;
    }

    get( url: string, query?: {[key:string]: any} ): Promise<IResponse> {
        if (query) {
            url += '?' + qs.stringify(query, { arrayFormat: 'repeat' });
        }
        return fetch(url, {
            method : 'GET',
            headers: this.headers,
        });
    }

    post( url: string, body: any ): Promise<IResponse> {
        return fetch(url, {
            method : 'POST',
            headers: this.headers,
            body   : JSON.stringify( body ),
        });
    }

    patch( url: string, body: any ): Promise<IResponse> {
        return fetch(url, {
            method : 'PATCH',
            headers: this.headers,
            body   : JSON.stringify( body ),
        });
    }

    delete( url: string ): Promise<IResponse> {
        return fetch(url, {
            method: 'DELETE',
            headers: this.headers,
        });
    }
}
