import React from 'react';

import MsgBox from './MsgBox'
import './ChatArea.css'

function App({allMessages,userMessage,userSelected,setUserMessage,sendMessage}) {
  return (
    <div className='chat-area'>
      {console.log(allMessages)}
      {console.log('msgs')}
        <div className="msgs-container">
        {
          allMessages.map( (msg)=>(
            <MsgBox msg={msg} owner={userSelected}/>
          ))
        }
        </div>
        <input value={userMessage} onChange={(e)=>setUserMessage(e.target.value)} placeholder='Type message here'/>
        <button onClick={()=>sendMessage()}>Send</button>
    </div>
  );
}

export default App;
