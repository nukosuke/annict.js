import { HttpClient } from '../../http-client';
import { Status }     from '../../string-literal';

export interface MeStatusCreateRequestQuery {
    work_id : number
    kind    : Status
}

export class MeStatusesService {
    constructor( private client: HttpClient ) {
    }

    create( query: MeStatusCreateRequestQuery ): Promise<Response> {
        return this.client.post('https://api.annict.com/v1/me/statuses', query);
    }
}
