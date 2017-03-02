import { HttpClient }          from '../http-client';
import { MeStatusesService }   from './me/me-statuses-service';
import { MeRecordsService }    from './me/me-records-service';
import { MeWorksService }      from './me/me-works-service';
import { MeProgramsService }   from './me/me-programs-service';

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
}
