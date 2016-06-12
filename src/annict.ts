import { HttpClient } from './http-client';
import {
  AuthorizationService,
  WorksService,
  EpisodesService,
  RecordsService,
  MeService
} from './services';

export default class Annict {
  public client  : HttpClient
  public OAuth   : AuthorizationService
  public Work    : WorksService
  public Episode : EpisodesService
  public Record  : RecordsService
  public Me      : MeService

  constructor() {
      this.client  = new HttpClient();
      this.OAuth   = new AuthorizationService( this.client );
      this.Work    = new WorksService        ( this.client );
      this.Episode = new EpisodesService     ( this.client );
      this.Record  = new RecordsService      ( this.client );
      this.Me      = new MeService           ( this.client );
  }
}
