import './App.css';
import { useSelector } from 'react-redux'
import ConversationContainer from './components/ConversationContainer';
//import { GetIPAddress, LookUpUserIp } from './server/server.js';
import LoginForm from './components/LoginForm';

const findUserByIP = (state) => {
  let obj = state.client;
  console.log("I TOO WAS CALLED");
  let value = obj.user_name == null;
  return !value;
}

function App() {
  return (
    <div className="App">
      {
        useSelector(findUserByIP) ? 
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
