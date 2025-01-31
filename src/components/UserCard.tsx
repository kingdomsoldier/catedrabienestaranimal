import React from 'react';
import { UserCardProps } from '../types/UserCardProps';

const UserCard: React.FC<UserCardProps> = ({ users }) => {  
    return (  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">  
            {users.map(user => (  
                <div key={user.id} className="max-w-sm overflow-hidden border border-gray-200 rounded-lg shadow-sm  bg-white p-2 mx-4">  
                    <img className='w-full' src={user.avatar} alt={`${user.name}'s avatar`} />  
                    <div className="px-6 py-4">  
                        <div className="font-bold text-xl mb-2">{user.name}</div>  
                        <p className="text-gray-700 text-base">{user.position}</p>  
                        <p className="text-gray-700 text-base">{user.institution}</p>  
                    </div>  
                    <div className="px-6 py-4 flex items-center">  
                        <img className="w-12 h-12 mr-2 object-cover" src={user.flagImage} alt={`Flag of ${user.country}`} />  
                        <span className="text-gray-700">{user.country}</span>  
                    </div>  
                </div>  
            ))}  
        </div>  
    );  
};  

export default UserCard;