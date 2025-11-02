import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User/User';

const Users = () => {
    const users =useLoaderData();
    return (
        <div>
            Users: {users.length}
            <div className='grid grid-cols-3 gap-6'>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;