import { HttpClient } from '../http-client';
import { Order }      from '../string-literal';
import { Work }       from './works-service';
import { Episode }    from './episodes-service';

/**
 * レスポンスのユーザフィールド
 */
export interface User {
    id            : number
    username      : string
    name          : string
    description   : string
    url           : string
    records_count : number
    created_at    : Date
}

/**
 * レスポンスの視聴記録フィールド
 */
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

/**
 * 視聴記録取得リクエストのクエリパラメータ
 */
export interface RecordsGetRequestQuery {
    fields            : string[]
    filter_ids        : number[]
    filter_episode_id : number
    page              : number
    per_page          : number
    sort_id           : Order
    sort_likes_count  : Order
}

/**
 * 視聴記録取得リクエストのレスポンス
 */
export interface RecordsGetResponse {
    records     : Record[]
    total_count : number
    next_page   : number
    prev_page   : number
}

/**
 * 視聴記録に関するサービス
 */
export class RecordsService {

    /**
     * @param client  HTTPクライアント
     */
    constructor( private client: HttpClient ) {
    }

    /**
     * 視聴記録を取得する
     * @param query クエリパラメータ
     */
    get(query?: RecordsGetRequestQuery): Promise<IResponse> {
        return this.client.get('https://api.annict.com/v1/records', query);
    }
}
