import { HttpClient }    from '../../http-client';
import { Order, BooleanString } from '../../string-literal';
import { Work, WorkId }          from '../works-service';
import { Episode }       from '../episodes-service';

export type ChannelId = number
export type ProgramId = number

export interface Channel {
    id   : ChannelId
    name : string
}

export interface Program {
    id             : ProgramId
    started_at     : Date
    is_rebroadcast : BooleanString
    channel        : Channel
    work           : Work
    episode        : Episode
}

export interface MeProgramsGetRequestQuery {
    fields               : string[]
    filter_ids           : ProgramId[]
    filter_channel_ids   : ChannelId[]
    filter_work_ids      : WorkId[]
    filter_started_at_gt : Date
    filter_started_at_lt : Date
    filter_unwatched     : BooleanString
    filter_rebroadcast   : BooleanString
    page                 : number
    per_page             : number
    sort_id              : Order
    sort_started_at      : Order
}

export interface MeProgramsGetResponse {
    programs    : Program[]
    total_count : number
    next_page   : number
    prev_page   : number
}

export class MeProgramsService {
    constructor( private client: HttpClient ) {
    }

    get( query: MeProgramsGetRequestQuery ): Promise<MeProgramsGetResponse> {
        return this.client.get('https://api.annict.com/v1/me/programs', query)
        .then(response => response.json());
    }
}
