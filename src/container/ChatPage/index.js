import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios'
import { useSearchParams } from "react-router-dom";

import {MsgHistoryArea,PeopleNameArea} from './../../component/ChatPage'



export default function ChatPage({user}) {
  const [userMessage, setUserMessage] = useState('');
  const [allMessages,setAllMessages] = useState([])
  const searchParams = useSearchParams();
  let socket
    console.log("searchParams",searchParams)
    useEffect( ()=>{
        try{
        axios.get(`${process.env.REACT_APP_SERVER_IP}/loadmsgs`)
        .then(res => {
            setAllMessages([...res.data,...allMessages])
        })
        }catch(e){
            console.log("ERROR IN LADING MSG")
        }
    },[])

    useEffect(()=>{
        try{
        socket = io(`${process.env.REACT_APP_SERVER_IP}`);
        socket.on('connect', function(){
            console.log('connected')
        });
        socket.on('new-message', function(data){
            setAllMessages([...allMessages,data])
        });
        }catch(e){
            console.log("ERROR IN SOCKOIT CONNECTION")
        }    
    },[])
    const sendMessage = () => {
        socket.emit(`message`,{sender:user,body:userMessage,time:Date.now()})
    };

  return (
    <div>
        deseeeeeeee
        <meta http-equiv="Cache-control" content="public" />
        <MsgHistoryArea
            allMessages={allMessages}
            userMessage={userMessage}
            userSelected={user}
            setUserMessage={setUserMessage}
            sendMessage={sendMessage} 
        />
    </div>
  );
}