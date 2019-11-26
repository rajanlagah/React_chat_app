import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import LoginPage from "./container/Login";
import ChatPage from "./container/ChatPage"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
        <Switch>
            <Route path="/ChatPage">
                <ChatPage/>
            </Route>
            <Route path="/">
                <LoginPage />
            </Route>
        </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
if('serviceWorker' in navigator ){
  navigator.serviceWorker.register('./custom-serviceWorker.js');
}   
