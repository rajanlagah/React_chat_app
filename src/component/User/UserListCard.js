import { Avatar, Badge, Stack } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextSecondary,InfoMain } from '../TypoGraphy/Heading';

import './style.css'

function UserListCard({name,img,is_active,last_msg,unseen_msgs}) {
  const navigate = useNavigate()
  return (
    <div className="user_list_card" onClick={()=>navigate(`/chat/${name}`)}>
        <Stack direction="row"  
          justifyContent="flex-start"
          alignItems="center" 
          spacing={2}
          >
            <Badge badgeContent={unseen_msgs} max={99} color="primary" overlap="circular">
              <Avatar src={img} alt={`user_${name}`} />
            </Badge>
            <Stack 
              justifyContent="center"
              >
              <TextSecondary text={name}/>
              <InfoMain text={last_msg} fw={unseen_msgs > 0?"bold":null}/>
            </Stack>
        </Stack>
      </div>
  );
}

export default UserListCard;
