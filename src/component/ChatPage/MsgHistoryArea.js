import React from 'react';

import MsgBox from './MsgBox'
import './ChatArea.css'

function MsgContainer({allMessages,userSelected}) {
  return (
        <div className="msgs-container">
        {
          allMessages.map( (msg)=>(
            <MsgBox msg={msg} owner={userSelected}/>
          ))
        }
        </div>
  );
}

export default MsgContainer;
