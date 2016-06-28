import { Promise }    from 'es6-promise';
import { HttpClient } from '../http-client';
import { Scope }      from '../string-literal';
import * as qs        from 'qs';

declare const BROWSER : string;

export interface AccessToken {
    access_token : string
    token_type   : string
    expires_in   : number
    scope        : string
    created_at   : number
}

export interface AccessTokenInfo {
    resource_owner_id  : number
    scopes             : Scope[]
    expires_in_seconds : number
    application        : {uid: string}
    created_at         : number
}

export class AuthorizationService {
    constructor( private client: HttpClient ) {
    }

    authorize(
      client_id     : string,
      response_type : string   = 'code',
      redirect_uri  : string   = 'urn:ietf:wg:oauth:2.0:oob',
      scope         : string[] = ['read'] ) {
        if(BROWSER) {
            window.location.assign(
                'https://api.annict.com/oauth/authorize?'
                + qs.stringify({
                    client_id,
                    response_type,
                    redirect_uri,
                    scope: scope.join(' ')
                })
            );
        }
        else {
            throw Error('Not Implemented on Node.js');
        }
    }

    token(
      client_id     : string,
      client_secret : string,
      grant_type    : string,
      redirect_uri  : string,
      code          : string ): Promise<IResponse> {
        if(BROWSER) {
            throw new Error('Not Implemented on Browser');
        }
        else {
            return this.client.post('https://api.annict.com/oauth/token', {
                client_id, client_secret, grant_type, redirect_uri, code
            });
        }
    }

    info(): Promise<IResponse> {
        return this.client.get('https://api.annict.com/oauth/token/info');
    }

    revoke(token: AccessToken): Promise<IResponse> {
        return this.client.post('https://api.annict.com/oauth/revoke', { token: token.access_token });
    }

}
