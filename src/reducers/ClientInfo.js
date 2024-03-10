import { LookUpUserIp } from '../server/server.js';

const initialState = 
{
    user_name: null,
    user_ip: null
}


export default function ClientReducer(state = initialState, action) {
    switch (action.type) 
    {
        case 'SET_USER': 
            console.log("Set User was called!");
            return action.payload;
        default:
            return state;
    }
}
