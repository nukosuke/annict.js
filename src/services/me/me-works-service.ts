import { HttpClient }       from '../../http-client';
import { Order, Status }    from '../../string-literal';
import { WorksGetResponse } from '../works-service';

export interface MeWorksGetRequestQuery {
    fields              : string[]
    filter_ids          : number[]
    filter_season       : string[]
    filter_title        : string
    filter_status       : Status
    page                : number
    per_page            : number
    sort_id             : Order
    sort_season         : Order
    sort_watchers_count : Order
}

export type MeWorksGetResponse = Response;

export class MeWorksService {
    constructor( private client: HttpClient ) {
    }

    get( query: MeWorksGetRequestQuery ): Promise<MeWorksGetResponse> {
        return this.client.get('https://api.annict.com/v1/me/works', query);
    }
}
