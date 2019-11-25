import React from 'react';

import './PeopleNamesArea.css'

function App({users,userSelected,setUserSelected}) {
  return (
    <div>
      <h5>People u may know</h5>
        <div className="person-name-container">
          {users.map(data=>(
            <button className={userSelected===data?"person-name person-selected":"person-name"} onClick={()=>setUserSelected(data)}>
                {data}
            </button>
          ))}
        </div>
    </div>
  );
}

export default App;
