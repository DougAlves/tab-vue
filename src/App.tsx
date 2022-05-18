import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TabController } from './components/TabController';

function App() {
  return (
    <div className="App">
      <TabController
        statemetns={['ola', 'ola2']}
        btn_texts={['bt1', 'bt2']}
      ></TabController>
    </div>
  );
}

export default App;
