import { HttpClient } from '../../http-client';

export interface MeProgramsGetRequestQuery {

}

export interface MeProgramsGetResponse {

}

export class MeProgramsService {
    constructor( private client: HttpClient ) {
    }

    get( query: MeProgramsGetRequestQuery ): Promise<MeProgramsGetResponse> {
        return this.client.get('https://api.annict.com/v1/me/programs', query)
        .then(response => response.json());
    }
}
