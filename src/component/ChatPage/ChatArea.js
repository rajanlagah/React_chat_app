import React from 'react';

import MsgBox from './MsgBox'
import './ChatArea.css'

function App({msgs,userPassword,setUserPassword,sendDataToLog}) {
  return (
    <div className='chat-area'>
        <div className="msgs-container">
        {
          msgs.map( (msg)=>(
            <MsgBox msg={msg} owner={'c'}/>
          ))
        }
        </div>
        <input value={userPassword} onChange={(e)=>setUserPassword(e.target.value)} placeholder='Type message here'/>
        <button onClick={()=>sendDataToLog()}>Send</button>
    </div>
  );
}

export default App;
