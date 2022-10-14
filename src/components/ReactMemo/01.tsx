import React from 'react';



const NewMessagesCounter = (props: { count: number } ) => {
    return (
        <div>
            {props.count}
        </div>
    );
};

export const UsersSecret = (props: { users: string[] } ) => {
    console.log('UsersSecret rendering')
    return (
        <div>
            { props.users.map((u, i) => <div key={i}>{u}</div>) }
        </div>
    );
};

export const Users = React.memo(UsersSecret)

export const NemMessageCounterContainer = React.memo(NewMessagesCounter)

export default NewMessagesCounter;