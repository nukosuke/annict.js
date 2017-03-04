import { HttpClient } from '../http-client';
import { Order }      from '../string-literal';

/**
 * user fields of API response
 */
export interface User {
    id                   : number
    username             : string
    name                 : string
    description          : string
    url                  : string
    avatar_url           : string
    background_image_url : string
    records_count        : number
    created_at           : Date
}

/**
 * query parameters for request
 */
export interface UsersGetRequestQuery {
  fields           : string[]
  filter_ids       : number[]
  filter_usernames : string[]
  page             : number
  per_page         : number
  sort_id          : Order
}

/**
 * users service class
 */
export class UsersService {
  constructor( private client: HttpClient ) {
  }

  /**
   * fetch items
   * @param query query parameters
   */
  get(query: UsersGetRequestQuery): Promise<Response> {
    return this.client.get('https://api.annict.com/v1/users', query);
  }
}
