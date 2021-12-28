import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import ChatPage from "./container/ChatPage"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ContactList from './container/ContactList';
import { InfoSecondary } from './component/TypoGraphy/Heading';


const channel = new BroadcastChannel('custom-serviceWorker');


export default function App() {

  const [status,setStatus] = useState('Offline')
  useEffect(() => {
    if('serviceWorker' in navigator ){
      navigator.serviceWorker.register('./custom-serviceWorker.js')
      .then(self=>{
        channel.addEventListener('message',event=>{
          console.log('status')
          console.log(event.data)
          setStatus(status)
        })
      })
    }
  }, [status])
     
  
  return (
    <Router>
        <div>
          <InfoSecondary text={status?"Online":"Offline"}/>¯
        </div>
        <Routes>
            <Route path="/ContactList" element={<ContactList/>}/>
            <Route exact path="/chat/:user" element={<ChatPage/>}/>
        </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

