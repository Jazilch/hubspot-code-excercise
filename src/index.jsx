import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Components/Application';

import './index.scss';

function App() {
  return (
    <div className="App">
      <Application />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
