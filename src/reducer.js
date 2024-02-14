import { combineReducers } from 'redux'
import ClientReducer from './reducers/ClientInfo';
import GroupFeedReducer from './reducers/GroupFeed';

const rootReducer = combineReducers({
  // Define a top-level state field named `client`, handled by `clientReducer`
  client: ClientReducer,
  group: GroupFeedReducer,
})

export default rootReducer;