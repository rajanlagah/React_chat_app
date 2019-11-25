import React from 'react';

import './MsgBox.css'

function App({msg,owner}) {
  return (
    <span className={msg.sender===owner?"msg-box green-box":"msg-box white-box"}>
        {msg.body}
    </span>
  );
}

export default App;
