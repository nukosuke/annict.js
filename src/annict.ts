import { HttpClient } from './http-client';
import {
  AuthorizationService,
  WorksService,
  EpisodesService,
  RecordsService,
  UsersService,
  ActivitiesService,
  MeService,
} from './services';

/**
 * Annict API class
 */
export default class Annict {
  public client  : HttpClient;
  public OAuth   : AuthorizationService;
  public Work    : WorksService;
  public Episode : EpisodesService;
  public Record  : RecordsService;
  public User    : UsersService;
  public Activity: ActivitiesService;
  public Me      : MeService;

  constructor() {
      this.client  = new HttpClient();
      this.OAuth   = new AuthorizationService( this.client );
      this.Work    = new WorksService        ( this.client );
      this.Episode = new EpisodesService     ( this.client );
      this.Record  = new RecordsService      ( this.client );
      this.User    = new UsersService        ( this.client );
      this.Activity= new ActivitiesService   ( this.client );
      this.Me      = new MeService           ( this.client );
  }
}
