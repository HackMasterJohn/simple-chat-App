import { PullGroupConversation }  from '../server/server.js'
const initialState = 
{
  messages: PullGroupConversation()
}
  
export default function GroupFeedReducer(state = initialState, action) {
  switch (action.type) 
  {
    case 'UPDATE_FEED': 
      return { messages: action.messages };
    default:
      return state;
  }
}