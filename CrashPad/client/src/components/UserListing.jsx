import React from 'react'

const UserListing = ({listing}) => {
  return (
    <div>
        <h1>{listing.name}</h1>
        <button>EDIT</button>
        <button>Delete</button>

    </div>
  )
}
export default UserListing