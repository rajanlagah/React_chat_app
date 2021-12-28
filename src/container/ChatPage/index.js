import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios'
import { useSearchParams } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';

import {MsgHistoryArea,PeopleNameArea} from './../../component/ChatPage'
import { Box, Button, Grid, Stack, TextField } from '@mui/material';

import './style.css'


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
    <div className="msg-history-area">
        <MsgHistoryArea
            allMessages={allMessages}
            userMessage={userMessage}
            userSelected={user}
            setUserMessage={setUserMessage}
            sendMessage={sendMessage} 
        />
        <div className="user-msg-input">
            <Grid container spacing={1}>
                <Grid item xs={9}>
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%' },
                        }}
                    >
                        <TextField 
                        size="small"
                        id="outlined-basic" 
                        label="Message" 
                        onChange={(e)=>setUserMessage(e.target.value)}
                        placeholder='Type message here'
                        value={userMessage} />
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{margin:"auto"}} >
                    <Button onClick={()=>sendMessage()} size="small" endIcon={<SendIcon />} />
                </Grid>
            </Grid>
        </div>
    </div>
  );
}