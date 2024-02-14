const initialState = {
    messages: []
  }
  
  export default function GroupFeedReducer(state = initialState, action) {
    switch (action.type) {
      case 'UPDATE_FEED': {
        return {
            messages: action.messages
        }
      }
      default:
        return state;
    }
  }