import { LookUpUserIp } from '../server/server.js';

const initialState = 
{
    ActiveUser: 
    {
        user_name: null,
        user_ip: null
    }
}


export default function ClientReducer(state = initialState, action) {
    switch (action.type) 
    {
        case 'SET_USER': 
            let obj = {ActiveUser: "HELLO"};
            console.log("CALL");
            LookUpUserIp((data) => {console.log(data); obj.ActiveUser = data});
            return obj;
        default:
            return state;
    }
}
