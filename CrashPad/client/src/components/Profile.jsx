import React from 'react'
import { useAuth } from '../context/AuthContext'

export const Profile = () => {

    const {user} = useAuth()
  return (
    <div className='pl-4 '> 
       
     <div className='w-48 ml-auto'>
        <img className='rounded-xl' src={user.avatarurl} />
     </div>
     <div >
        <h1 className='text-4xl font-bold'> Welcome {user.username} </h1>
    <h2 className='text-2xl font-light'> checkout your listings here </h2>
    
        </div>
    </div>
  )
}
