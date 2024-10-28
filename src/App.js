import React from 'react';
import './App.css';
import ColorView from './hex2rgb/ColorView';
import Walks from './steps/Walks';


function App() {
  return (<React.Fragment>
    <div className="task-1">
      <ColorView />
    </div>
    <div className="task-2">
      <Walks />
    </div>
  </React.Fragment>);
}

export default App;
