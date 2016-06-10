import { HttpClient } from '../http-client';
import { Order }      from '../string-literal';
import { Work }       from './works-service';

export interface Episode {
    id            : number
    number        : number
    number_text   : string
    sort_number   : number
    title         : string
    records_count : number
    work?         : Work
    prev_episode? : Episode | null
    next_episode? : Episode | null
}

export interface EpisodesRequestQuery {
    fields           : string[]
    filter_ids       : number[]
    filter_work_id   : number
    page             : number
    per_page         : number
    sort_id          : Order
    sort_sort_number : Order
}

export interface EpisodesResponse {
    episodes: Episode[]
    total_count : number
    next_page   : number | null
    prev_page   : number | null
}

export class EpisodesService {
    constructor( private client: HttpClient ) {
    }

    get(query: EpisodesRequestQuery): Promise<EpisodesResponse> {
        return this.client.get('https://api.annict.com/v1/episodes', query)
        .then(response => response.json());
    }
}
