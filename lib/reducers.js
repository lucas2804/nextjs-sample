import { combineReducers } from 'redux';

export const LOCATION_CHANGE = 'LOCATION_CHANGE';

export function location(state = null, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return action.payload;
    default:
      return state;
  }
}
const routeReducer = combineReducers({ location });

/**
 * Create the main reducer with dynamically injected ones
 * @param {Object} injectedReducers
 */

export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    ...injectedReducers,
  });
}
