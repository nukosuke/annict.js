import { HttpClient } from '../http-client';
import { Order }      from '../string-literal';
import { Work }       from './works-service';
import { Episode }    from './episodes-service';

export interface User {
    id            : number
    username      : string
    name          : string
    description   : string
    url           : string
    records_count : number
    created_at    : Date
}

export interface Record {
    id             : number
    comment        : string
    rating         : number
    is_modified    : boolean
    likes_count    : number
    comments_count : number
    created_at     : Date
    user           : User
    work           : Work
    episode        : Episode
}

export interface RecordsGetRequestQuery {
    fields            : string[]
    filter_ids        : number[]
    filter_episode_id : number
    page              : number
    per_page          : number
    sort_id           : Order
    sort_likes_count  : Order
}

export interface RecordsGetResponse {
    records     : Record[]
    total_count : number
    next_page   : number
    prev_page   : number
}

export class RecordsService {
    constructor( private client: HttpClient ) {
    }

    get(query?: RecordsGetRequestQuery): Promise<RecordsGetResponse> {
        return this.client.get('https://api.annict.com/v1/records', query)
        .then(response => response.json());
    }
}
