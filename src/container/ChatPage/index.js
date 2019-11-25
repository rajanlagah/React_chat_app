import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import {ChatArea,PeopleNameArea} from './../../component/ChatPage'


const socket = io('http://localhost:4000');

export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [userSelected, setUserSelected] = useState('');
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    socket.on('connect', function(){
        console.log('connected')
    });

      console.log('i am moutned');
  });

    const sendMessage = () => {
        console.log(userSelected)   
        console.log(userMessage)

    };

  return (
    <div>
        <ChatArea 
            userName={userName}
            msgs={[{
                time:1,
                sender:"a",
                body:'Hello'     
            },{
                time:2,
                sender:"c",
                body:'hi'     
            },{
                time:1,
                sender:"a",
                body:'bbiii'     
            },{
                time:1,
                sender:"a",
                body:'bbiii'     
            },{
                time:1,
                sender:"a",
                body:'bbiii'     
            },{
                time:1,
                sender:"a",
                body:'bbiii'     
            },]}
            userMessage={userMessage}
            setUserName={setUserName}
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