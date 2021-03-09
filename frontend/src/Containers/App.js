import './App.css';
import {connect, sendMsg} from '../api';
import {useEffect} from 'react';
import Header from './Header';
import Menu from './Menu';


function App() {
  useEffect(() => {connect()}, []);
  var send = () => {
    console.log('hello');
    sendMsg('hello');
  }
  return (
    <div className="App">
      <Header />
      <Menu />
    </div>
  );
}

export default App;
