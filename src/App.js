import './App.css';
import { useSelector } from 'react-redux'
import ConversationContainer from './components/ConversationContainer';
//import { GetIPAddress, LookUpUserIp } from './server/server.js';
import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginForm';
import { useEffect } from 'react';

const findUserByIP = (state) => {
  //console.log(state);
  let value = false;
  console.log("State IP is "+state.ActiveUser);
  return value;
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'SET_USER' });
  },[]);
  
  const authenticatedClient = useSelector((state) => findUserByIP(state.client));

  return (
    <div className="App">
      {
        authenticatedClient ? 
        (
          <ConversationContainer />
        ):
        (
          <LoginForm/>
        )
      }
    </div>
  );
}

export default App;
