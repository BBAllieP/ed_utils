import logo from '../logo.svg';
import './App.css';
import {connect, sendMsg} from '../api';
import {useEffect} from 'react';



function App() {
  useEffect(() => {connect()}, []);
  var send = () => {
    console.log('hello');
    sendMsg('hello');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
