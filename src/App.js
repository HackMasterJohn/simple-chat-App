import './App.css';
import Message from './components/Message';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div className="App">
    <StyledEngineProvider injectFirst>
      <Message />
    </StyledEngineProvider>
    </div>
  );
}

export default App;
