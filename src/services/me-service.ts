import { HttpClient }          from '../http-client';
import { Order, Status }       from '../string-literal';
import { Record }              from './records-service';
import { Work, WorksResponse } from './works-service';

export interface MeStatusesRequestQuery {
    work_id : number
    kind    : Status
}
/*
export interface MeRecordsRequestQuery {
    episode_id     : number
    comment        : string
    rating         : number
    share_twitter  : boolean
    share_facebook : boolean
}
*/
export interface MeWorksRequestQuery {
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

export class MeService {
    constructor( private client: HttpClient ) {
    }

    statuses( query: MeStatusesRequestQuery ): Promise<IResponse> {
        return this.client.post('https://api.annict.com/v1/me/statuses', query);
    }
/*
    records( query: MeRecordsRequestQuery ): Promise<Record> {
        return this.client.post('https://api.annict.com/v1/me/records', query)
        .then(response => response.json());
    }
*/
    works( query: MeWorksRequestQuery ): Promise<WorksResponse> {
        return this.client.get('https://api.annict.com/v1/me/works', query)
        .then(response => response.json());
    }
/*
    programs( query ) {
        return this.client.post('', query);
    }
*/
}
