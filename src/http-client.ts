import 'isomorphic-fetch';
import * as qs from 'qs';

/**
 * wrapper class of fetch API
 */
export class HttpClient {

    /**
     * HTTP header hash
     */
    private headers: {[index:string]: string} = {
        'Accept'       : 'application/json',
        'Content-Type' : 'application/json',
        'User-Agent'   : 'annict.js',
    };

    /**
     * get value in HTTP header by key
     * @param key field name
     */
    getHeader( key: string ): string {
        return this.headers[key];
    }

    /**
     * set value in HTTP header by key
     * @param key   field name
     * @param value value of field
     */
    setHeader( key: string, value: string ): void {
        this.headers[key] = value;
    }

    /**
     * set access token to header.
     * This method equivalent to `annict.client.setHeader("Authorization", "Bearer <token>");
     * @param token access token
     */
    setToken( token: string ): void {
      this.headers['Authorization'] = `Bearer ${token}`;
    }

    /**
     * execute GET method for URL
     * @param url   request URL
     * @param query query object in form of key-value
     */
    get( url: string, query?: {[key:string]: any} ): Promise<Response> {
        if (query) {
            url += '?' + qs.stringify(query, { arrayFormat: 'repeat' });
        }
        return fetch(url, {
            method : 'GET',
            headers: this.headers,
        });
    }

    /**
     * execute POST method for URL
     * @param url   request URL
     * @param body  request body object
     */
    post( url: string, body: any ): Promise<Response> {
        return fetch(url, {
            method : 'POST',
            headers: this.headers,
            body   : JSON.stringify( body ),
        });
    }

    /**
     * execute PATCH method for URL
     * @param url   request URL
     * @param body  request body object
     */
    patch( url: string, body: any ): Promise<Response> {
        return fetch(url, {
            method : 'PATCH',
            headers: this.headers,
            body   : JSON.stringify( body ),
        });
    }

    /**
     * execute DELETE method for URL
     * @param url request URL
     */
    delete( url: string ): Promise<Response> {
        return fetch(url, {
            method: 'DELETE',
            headers: this.headers,
        });
    }
}
