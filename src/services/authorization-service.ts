import { Promise }    from 'es6-promise';
import { HttpClient } from '../http-client';
import { Scope }      from '../string-literal';
import * as qs        from 'qs';

/**
 * ブラウザ環境の時のみwebpackで定義する定数
 */
declare const BROWSER : string;

/**
 * レスポンスのアクセストークンフィールド
 */
export interface AccessToken {
    access_token : string
    token_type   : string
    expires_in   : number
    scope        : string
    created_at   : number
}

/**
 * レスポンスのアクセストークン情報フィールド
 */
export interface AccessTokenInfo {
    resource_owner_id  : number
    scopes             : Scope[]
    expires_in_seconds : number
    application        : {uid: string}
    created_at         : number
}

/**
 * 認証に関するサービス
 */
export class AuthorizationService {

    /**
     * @param client  HTTPクライアント
     */
    constructor( private client: HttpClient ) {
    }

    /**
     * ユーザのアクセス承認プロセスを行う (Node非サポート)
     * @param client_id     アプリケーション作成時に発行された`アプリケーションID`
     * @param response_type `code`を指定
     * @param redirect_uri  アプリケーション作成時に指定した`コールバックURL`
     * @param scope         アプリケーションのアクセス可能範囲 (`read`と`write`が指定可能)
     */
    authorize(
      client_id     : string,
      response_type : string   = 'code',
      redirect_uri  : string   = 'urn:ietf:wg:oauth:2.0:oob',
      scope         : string[] = ['read'] ) {
        if(typeof BROWSER !== 'undefined') {
            window.location.assign(
                'https://api.annict.com/oauth/authorize?'
                + qs.stringify({
                    client_id,
                    response_type,
                    redirect_uri,
                    scope: scope.join(' '),
                })
            );
        }
        else {
            throw Error('Not Implemented on Node.js');
        }
    }

    /**
     * アクセストークンを取得する (ブラウザ非サポート)
     * @param client_id     アプリケーション作成時に発行された`アプリケーションID`
     * @param client_secret アプリケーション作成時に発行された`シークレットキー`
     * @param grant_type    `authorization_code`を指定
     * @param redirect_uri  アプリケーション作成時に指定した`コールバックURL`
     * @param code          ユーザのアクセス承認後に取得した`code`
     */
    token(
      client_id     : string,
      client_secret : string,
      grant_type    : string,
      redirect_uri  : string,
      code          : string ): Promise<IResponse> {
        if(typeof BROWSER !== 'undefined') {
            throw new Error('Not Implemented on Browser');
        }
        else {
            return this.client.post('https://api.annict.com/oauth/token', {
                client_id, client_secret, grant_type, redirect_uri, code,
            });
        }
    }

    /**
     * 認証ユーザの情報を取得する
     */
    info(): Promise<IResponse> {
        return this.client.get('https://api.annict.com/oauth/token/info');
    }

    /**
     * アクセストークンを失効させる
     * @param token アクセストークン
     */
    revoke(token: AccessToken): Promise<IResponse> {
        return this.client.post('https://api.annict.com/oauth/revoke', { token: token.access_token });
    }

}
