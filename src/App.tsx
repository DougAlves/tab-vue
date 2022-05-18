import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TabController } from './components/TabController';

function App() {
  return (
    <div className="App">
      <TabController
        props={[{
          statemet:'ola',
          btn_text: 'bt1'
        },
        {
          statemet:'ola 2',
          btn_text: 'bt2'
        },]
      }
      ></TabController>
    </div>
  );
}

export default App;
