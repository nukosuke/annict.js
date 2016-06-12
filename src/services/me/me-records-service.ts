import { HttpClient } from '../../http-client';
import { Record }     from '../records-service';

export type RecordId = number

export interface MeRecordCreateRequestQuery {
    episode_id     : number
    comment        : string
    rating         : number
    share_twitter  : boolean
    share_facebook : boolean
}

export type MeRecordUpdateRequestQuery = MeRecordCreateRequestQuery
export type MeRecordCreateResponse     = Record
export type MeRecordUpdateResponse     = Record
//export type MeRecordDeleteResponse     = IResponse

export class MeRecordsService {
    constructor( private client: HttpClient ) {
    }

    create( query: MeRecordCreateRequestQuery ): Promise<MeRecordCreateResponse> {
        return this.client.post('https://api.annict.com/v1/me/records', query)
        .then(response => response.json());
    }

    update( id: RecordId, query: MeRecordUpdateRequestQuery ): Promise<MeRecordUpdateResponse> {
        return this.client.patch(`https://api.annict.com/v1/me/records/${id}`, query)
        .then(response => response.json());
    }

    /*
    delete( id: RecordId ): Promise<MeRecordDeleteResponse> {

    }
    */
}
