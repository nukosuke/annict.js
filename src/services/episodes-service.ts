import { HttpClient } from '../http-client';
import { Order }      from '../string-literal';
import { Work }       from './works-service';

/**
 * episode fields of API response
 */
export interface Episode {
    id            : number
    number        : number
    number_text   : string
    sort_number   : number
    title         : string
    records_count : number
    work?         : Work
    prev_episode? : Episode
    next_episode? : Episode
}

/**
 * query parameters for request
 */
export interface EpisodesGetRequestQuery {
    fields           : string[]
    filter_ids       : number[]
    filter_work_id   : number
    page             : number
    per_page         : number
    sort_id          : Order
    sort_sort_number : Order
}

/**
 * response of episodes
 */
export interface EpisodesGetResponse {
    episodes: Episode[]
    total_count : number
    next_page   : number
    prev_page   : number
}

/**
 * episode service class
 */
export class EpisodesService {

    /**
     * @param client  HTTP client
     */
    constructor( private client: HttpClient ) {
    }

    /**
     * fetch items
     * @param query query parameters
     */
    get(query: EpisodesGetRequestQuery): Promise<Response> {
        return this.client.get('https://api.annict.com/v1/episodes', query);
    }
}
