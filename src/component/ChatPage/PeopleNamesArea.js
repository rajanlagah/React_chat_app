import React from 'react';

function App({users,userSelected,setUserSelected}) {
  return (
    <div>
      {users.map(data=>(
        <button>
            {data}
        </button>
      ))}
    </div>
  );
}

export default App;
