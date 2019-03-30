import schema from '../schemas/index';
import { fromJS } from 'immutable';
import { SEARCH_ENTITIES } from '../actions-types/index';

const initialState = fromJS({
  // ...data,
  entities: schema.entities,
  categories: schema.result.categories,
  search: ''
});

function data(state = initialState, action){
  switch (action.type) {
    case SEARCH_ENTITIES : {
      return state.set('search', action.payload.query)
    }
    break;
    default:
      return state
    break;
  }
}

export default data;