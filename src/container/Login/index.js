import React, { useState, useEffect } from 'react';

import LoginPageUI from './../../component/Login'


export default function LoginPage() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
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
        <LoginPageUI 
            userName={userName}
            userPassword={userPassword}
            setUserName={setUserName}
            setUserPassword={setUserPassword}
            sendDataToLog={sendDataToLog} 
        />
    </div>
  );
}