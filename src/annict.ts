import { HttpClient } from './http-client';
import {
  AuthorizationService,
  //WorksService,
  //EpisodesService,
  //RecordsService,
  //MeService
} from './services';

export class Annict {
  private client    : HttpClient
  public  authorize : AuthorizationService
  //public  works     : WorksService
  //public  episodes  : EpisodesService
  //public  records   : RecordsService
  //public  me        : MeService

  constructor() {
      this.client    = new HttpClient();
      this.authorize = new AuthorizationService( this.client );
      //this.works     = new WorksService        ( this.client );
      //this.episodes  = new EpisodesService     ( this.client );
      //this.me        = new MeService           ( this.client );
  }
}
