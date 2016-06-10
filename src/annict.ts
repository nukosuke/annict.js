import { HttpClient } from './http-client';
import {
  AuthorizationService,
  //WorksService,
  //EpisodesService,
  //RecordsService,
  //MeService
} from './services';

export default class Annict {
  public client : HttpClient
  public oauth  : AuthorizationService
  //public  works     : WorksService
  //public  episodes  : EpisodesService
  //public  records   : RecordsService
  //public  me        : MeService

  constructor() {
      this.client    = new HttpClient();
      this.oauth     = new AuthorizationService( this.client );
      //this.works     = new WorksService        ( this.client );
      //this.episodes  = new EpisodesService     ( this.client );
      //this.me        = new MeService           ( this.client );
  }
}
