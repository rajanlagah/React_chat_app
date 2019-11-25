import React from 'react';

function App({userName,userPassword,setUserName,setUserPassword,sendDataToLog}) {
  return (
    <div>
        <p>You clicked {userName} times</p>
        <input value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <input value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
        <button onClick={()=>sendDataToLog()}>Login</button>
    </div>
  );
}

export default App;
