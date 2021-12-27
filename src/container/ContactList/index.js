import React from 'react';
import { TextMain } from '../../component/TypoGraphy/Heading';
import UserListCard from '../../component/User/UserListCard';


function ContactList() {
    const users = [{
        name: "Rajan",
        img: 'something',
        is_active: true,
        last_msg: 'hi',
        unseen_msgs: 4
    }]
    return (
        <div>
            <TextMain text ="Contacts" />
            <br/>
            <br/>
            { users.map((user) => <UserListCard
               {...user}
            />)}
        </div>
    );
}

export default ContactList;
