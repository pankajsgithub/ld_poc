import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { withLDProvider } from 'launchdarkly-react-client-sdk'


const LDProvider = withLDProvider({
  clientSideID: '6613b20b78bf1a0f9ec606d3',
  context: {
    "kind": "user",
    "key": "user-key-123abc",
    "name": "Sandy Smith",
    "email": "sandy@example.com"
  },
  options: { /* ... */ }
})(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LDProvider />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
