import './App.css';
import { useSelector } from 'react-redux'
import ConversationContainer from './components/ConversationContainer';
import LoginForm from './components/LoginForm';

// Used to Validate if the device 
// has been looked up and registered
// with a user name.
const findUserByIP = (state) => {
  let obj = state.client;
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
