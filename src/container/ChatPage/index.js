import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios'

import {ChatArea,PeopleNameArea} from './../../component/ChatPage'


const socket = io(`${process.env.REACT_APP_SERVER_IP}`);
socket.on('connect', function(){
    console.log('connected')
});

export default function LoginPage() {
  const [userMessage, setUserMessage] = useState('');
  const [userSelected, setUserSelected] = useState('a');
  const [allMessages,setAllMessages] = useState([])
  // Similar to componentDidMount and componentDidUpdate:
    useEffect( ()=>{
        axios.get(`${process.env.REACT_APP_SERVER_IP}/loadmsgs`)
        .then(res => {
            setAllMessages([...res.data,...allMessages])
        })
    },[])

    socket.on('new-message', function(data){
        setAllMessages([...allMessages,data])
    });    
    const sendMessage = () => {
        socket.emit(`message`,{sender:userSelected,body:userMessage,time:Date.now()})
    };

  return (
    <div>
        <meta http-equiv="Cache-control" content="public" />
        <ChatArea
            allMessages={allMessages}
            userMessage={userMessage}
            userSelected={userSelected}
            setUserMessage={setUserMessage}
            sendMessage={sendMessage} 
        />
        <PeopleNameArea 
            users={["a","11","c","d","e","f"]}
            userSelected={userSelected}
            setUserSelected={setUserSelected}
        />
    </div>
  );
}