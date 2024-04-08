import logo from './logo.svg';
import ldlogo from './ld_logo.png'
import './App.css';
import { useFlags } from 'launchdarkly-react-client-sdk'
import Header from './components/Header';

function App() {

  const { imageSwitch, bottomText , useHeader } = useFlags()

  return (
    <div className="App">
      {useHeader ? <Header/> : null}
      <header className="App-header">
        {
          imageSwitch ? 

          (<img src={ldlogo} className="App-logo" alt="ldlogo" />) : 
          (<img src={logo} className="App-logo" alt="logo" />)
        }
        
        
        <p>
          {bottomText}
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

