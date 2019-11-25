import React, { useState, useEffect } from 'react';

import {ChatArea,PeopleNameArea} from './../../component/ChatPage'


export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userSelected, setUserSelected] = useState('');
  // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//       console.log('i am moutned');
//   });

    const sendDataToLog = () => {
        console.log(userName)   
        console.log(userPassword)   
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
            userPassword={userPassword}
            setUserName={setUserName}
            setUserPassword={setUserPassword}
            sendDataToLog={sendDataToLog} 
        />
        <PeopleNameArea 
            users={["a","b"]}
            userSelected={"a"}
            setUserSelected={setUserSelected}
        />
    </div>
  );
}