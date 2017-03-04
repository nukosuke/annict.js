import { HttpClient }          from '../http-client';
import { MeStatusesService }   from './me/me-statuses-service';
import { MeRecordsService }    from './me/me-records-service';
import { MeWorksService }      from './me/me-works-service';
import { MeProgramsService }   from './me/me-programs-service';

/**
 * me fields of API response
 */
export interface Me {
  id                   : number
  username             : string
  name                 : string
  description          : string
  url                  : string
  avatar_url           : string
  background_image_url : string
  records_count        : number
  created_at           : Date
  email                : string
  notifications_count  : number
}

/**
 * query parameters for request
 */
export interface MeGetRequestQuery {
  fields : string[]
}

/**
 * response of me
 */
export type MeGetResponse = Me;

/**
 * account service class
 */
export class MeService {
    public Status  : MeStatusesService;
    public Record  : MeRecordsService;
    public Work    : MeWorksService;
    public Program : MeProgramsService;

    /**
     * @param client  HTTP client
     */
    constructor( private client: HttpClient ) {
        this.Status  = new MeStatusesService( client );
        this.Record  = new MeRecordsService ( client );
        this.Work    = new MeWorksService   ( client );
        this.Program = new MeProgramsService( client );
    }

    /**
     * fetch item
     * @param query query parameters
     */
    get(query: MeGetRequestQuery): Promise<Response> {
      return this.client.get('https://api.annict.com/v1/me', query);
    }
}
