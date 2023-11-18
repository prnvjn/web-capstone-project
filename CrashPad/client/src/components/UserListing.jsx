import { IconButton } from '@mui/material'
import React from 'react'


const UserListing = ({listing,handleEdit,handleDelete}) => {
  return (
    <div className='px-2 py-4  shadow-sm flex justify-between gap-8 items-center '>
        <h1 className='text-lg'>{listing.name}</h1>
        <div className='flex gap-4'>
        <button className='bg-blue-300 py-2 px-3 rounded hover:bg-blue-400' onClick={()=>handleEdit(listing.id)}>EDIT</button>
      
      <button  className='bg-red-400 py-2 px-3 rounded hover:bg-red-400'  onClick={()=>handleDelete(listing.id)}>Delete</button>
        </div>
       
        {/* <IconButton>
      <DeleteIcon/>
        </IconButton> */}

    </div>
  )
}
export default UserListing