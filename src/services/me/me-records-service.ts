import { HttpClient }    from '../../http-client';
import { Record }        from '../records-service';
import { BooleanString } from '../../string-literal';

export type RecordId = number;

export interface MeRecordCreateRequestQuery {
    episode_id     : number
    comment        : string
    rating         : number
    share_twitter  : string | boolean
    share_facebook : string | boolean
}

export type MeRecordUpdateRequestQuery = MeRecordCreateRequestQuery;
export type MeRecordCreateResponse     = IResponse;
export type MeRecordUpdateResponse     = IResponse;
export type MeRecordDeleteResponse     = IResponse;

export class MeRecordsService {
    constructor( private client: HttpClient ) {
    }

    private normalizeQuery( query: MeRecordCreateRequestQuery ): MeRecordCreateRequestQuery | MeRecordUpdateResponse {
      query.share_twitter  = query.share_twitter.toString();
      query.share_facebook = query.share_facebook.toString();
      return query;
    }

    create( query: MeRecordCreateRequestQuery ): Promise<MeRecordCreateResponse> {
        const normalizedQuery = this.normalizeQuery( query );
        return this.client.post('https://api.annict.com/v1/me/records', normalizedQuery);
    }

    update( id: RecordId, query: MeRecordUpdateRequestQuery ): Promise<MeRecordUpdateResponse> {
        const normalizedQuery = this.normalizeQuery( query );
        return this.client.patch(`https://api.annict.com/v1/me/records/${id}`, normalizedQuery);
    }

    delete( id: RecordId ): Promise<MeRecordDeleteResponse> {
        return this.client.delete(`https://api.annict.com/v1/me/records/${id}`);
    }
}
