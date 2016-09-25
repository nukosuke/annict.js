import 'isomorphic-fetch';
import { Promise } from 'es6-promise';
import * as qs     from 'qs';

/**
 * fetch APIのラッパークラス
 */
export class HttpClient {

    /**
     * HTTPヘッダのハッシュ
     */
    private headers: {[index:string]: string} = {
        'Accept'       : 'application/json',
        'Content-Type' : 'application/json',
        'User-Agent'   : 'annict.js',
    };

    /**
     * ヘッダの値を取得する
     * @param key ヘッダのフィールド名
     */
    getHeader( key: string ): string {
        return this.headers[key];
    }

    /**
     * ヘッダの値を設定する
     * @param key   ヘッダのフィールド名
     * @param value ヘッダの値
     */
    setHeader( key: string, value: string ): void {
        this.headers[key] = value;
    }

    /**
     * URLに対してGETリクエストを行う
     * @param url   リクエスト先のURL
     * @param query クエリのハッシュ
     */
    get( url: string, query?: {[key:string]: any} ): Promise<IResponse> {
        if (query) {
            url += '?' + qs.stringify(query, { arrayFormat: 'repeat' });
        }
        return fetch(url, {
            method : 'GET',
            headers: this.headers,
        });
    }

    /**
     * URLに対してPOSTリクエストを行う
     * @param url   リクエスト先のURL
     * @param body  リクエストbody
     */
    post( url: string, body: any ): Promise<IResponse> {
        return fetch(url, {
            method : 'POST',
            headers: this.headers,
            body   : JSON.stringify( body ),
        });
    }

    /**
     * URLに対してPATCHリクエストを行う
     * @param url   リクエスト先のURL
     * @param body  リクエストbody
     */
    patch( url: string, body: any ): Promise<IResponse> {
        return fetch(url, {
            method : 'PATCH',
            headers: this.headers,
            body   : JSON.stringify( body ),
        });
    }

    /**
     * URLに対してDELETEリクエストを行う
     * @param url リクエスト先のURL
     */
    delete( url: string ): Promise<IResponse> {
        return fetch(url, {
            method: 'DELETE',
            headers: this.headers,
        });
    }
}
