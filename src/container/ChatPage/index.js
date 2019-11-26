import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios'

import {ChatArea,PeopleNameArea} from './../../component/ChatPage'


const socket = io('http://localhost:4000');
socket.on('connect', function(){
    console.log('connected')
});

export default function LoginPage() {
  const [userMessage, setUserMessage] = useState('');
  const [userSelected, setUserSelected] = useState('a');
  const [allMessages,setAllMessages] = useState([])
  // Similar to componentDidMount and componentDidUpdate:
    
    useEffect(()=>{
        socket.on('new-message', function(data){
            console.log('data')
            console.log(data)
            setAllMessages([...allMessages,data])
            console.log(allMessages)
        });    
    },[allMessages])

  useEffect(() => {   
    if('serviceWorker' in navigator ){
        navigator.serviceWorker.register('/custom-service-worker.js');
    }

      console.log('i am moutned');
  },[userMessage,userSelected,allMessages]);

    const sendMessage = () => {
        console.log(userSelected)   
        console.log(userMessage)
        socket.emit(`message`,{sender:userSelected,body:userMessage,time:Date.now()})
    };

  return (
    <div>
        <ChatArea
            allMessages={allMessages}
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            sendMessage={sendMessage} 
        />
        <PeopleNameArea 
            users={["a","b","c","d","e","f"]}
            userSelected={userSelected}
            setUserSelected={setUserSelected}
        />
    </div>
  );
}