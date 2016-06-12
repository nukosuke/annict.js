import { HttpClient } from '../http-client';
import { Order }      from '../string-literal';

export interface Work {
    id                : number
    title             : string
    title_kana        : string
    media             : string
    media_text        : string
    season_name       : string
    season_name_text  : string
    released_on       : Date
    released_on_about : Date
    official_site_url : string
    wikipedia_url     : string
    twitter_username  : string
    twitter_hashtag   : string
    episodes_count    : number
    watchers_count    : number
}

export interface WorksGetRequestQuery {
    fields              : string[]
    filter_ids          : number[]
    filter_season       : string[]
    filter_title        : string[]
    page                : number
    per_page            : number
    sert_id             : Order
    sort_season         : Order
    sort_watchers_count : Order
}

export interface WorksGetResponse {
    works       : Work[]
    total_count : number
    next_page   : number
    prev_page   : number
}

export class WorksService {
    constructor( private client: HttpClient ) {
    }

    get(query?: WorksGetRequestQuery): Promise<WorksGetResponse> {
        return this.client.get('https://api.annict.com/v1/works', query)
        .then(response => response.json());
    }
}
