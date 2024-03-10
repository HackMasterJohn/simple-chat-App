const initialState = 
{
    user_name: null,
    user_ip: null
}


export default function ClientReducer(state = initialState, action) {
    switch (action.type) 
    {
        case 'SET_USER': 
            return action.payload;
        default:
            return state;
    }
}
