import React from 'react';

import MsgBox from './MsgBox'
import './ChatArea.css'

function App({msgs,userMessage,setUserMessage,sendMessage}) {
  return (
    <div className='chat-area'>
        <div className="msgs-container">
        {
          msgs.map( (msg)=>(
            <MsgBox msg={msg} owner={'c'}/>
          ))
        }
        </div>
        <input value={userMessage} onChange={(e)=>setUserMessage(e.target.value)} placeholder='Type message here'/>
        <button onClick={()=>sendMessage()}>Send</button>
    </div>
  );
}

export default App;
