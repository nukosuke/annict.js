import { Promise }    from 'es6-promise';
import { HttpClient } from '../http-client';

interface AccessToken {
    access_token : string
    token_type   : string
    expires_in   : number
    scope        : string
    created_at   : number
}

interface AccessTokenInfo {
    resource_owner_id  : number
    scopes             : string[]
    expires_in_seconds : number
    application        : {uid: string}
    created_at         : number
}

export class AuthorizationService {
    constructor( private client: HttpClient ) {
    }

    authorize() {
        throw Error('Not Implemented');
    }

    token(
        client_id     : string,
        client_secret : string,
        grant_type    : string,
        redirect_uri  : string,
        code          : string ): Promise<AccessToken> {
          return this.client.post('https://api.annict.com/oauth/token', {
            client_id, client_secret, grant_type, redirect_uri, code
          })
          .then(response => response.json());
    }

    info(): Promise<AccessTokenInfo> {
        return this.client.get('https://api.annict.com/oauth/token/info')
        .then(response => response.json());
    }

    revoke(token: AccessToken): Promise<{}> {
        return this.client.post('https://api.annict.com/oauth/revoke', { token: token.access_token })
        .then(response => response.json());
    }

}
