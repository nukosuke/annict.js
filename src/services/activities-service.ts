import { HttpClient }    from '../http-client';
import { Action, Order } from '../string-literal';
import { User }          from './users-service';
import { Work }          from './works-service';

/**
 * activity fields of API response
 */
export interface Activity {
  id         : number
  user       : User
  work       : Work
  action     : Action
  created_at : Date
}

/**
 * query parameters for request
 */
export interface ActivitiesGetRequestQuery {
  fields          : string[]
  filter_user_id  : number
  filter_username : string
  page            : number
  per_page        : number
  sort_id         : Order
}

/**
 * activities service class
 */
export class ActivitiesService {
  constructor( private client: HttpClient ) {
  }

  /**
   * fetch items
   * @param query query parameters
   */
  get(query: ActivitiesGetRequestQuery): Promise<Response> {
    return this.client.get('https://api.annict.com/v1/activities', query);
  }
}
