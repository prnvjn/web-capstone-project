import { IconButton } from '@mui/material'
import React from 'react'


const UserListing = ({listing,handleEdit}) => {
  return (
    <div className='px-2 py-1  shadow-sm flex justify-between '>
        <h1 className='text-lg'>{listing.name}</h1>
        <div className='flex gap-2'>
        <button className='bg-blue-300 py-2 px-3 rounded hover:bg-blue-400' onClick={()=>handleEdit(listing.id)}>EDIT</button>
      
      <button  className='bg-red-400 py-2 px-3 rounded hover:bg-red-400'>Delete</button>
        </div>
       
        {/* <IconButton>
      <DeleteIcon/>
        </IconButton> */}

    </div>
  )
}
export default UserListing