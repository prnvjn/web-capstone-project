import React,{useState,useEffect} from 'react'
import { useAuth } from '../context/AuthContext'
import UserListing from '../components/userListing'
import EditListing from './EditListing'
import { Profile } from '../components/Profile'
import { deleteItem } from '../services/CustomListingsAPI'

const ProfileDashBoard = () => {



const {user} = useAuth()

// const [user, setUser] = useState([])
const [listings, setListings] = useState([])
const [editId, setEditId]=useState(null)
const [deleteListing,setDeleteListing] = useState(null)

useEffect(() => {
    fetchUSERListings()
  });


  useEffect(()=>{
    const deleted = async () =>{
      if (deleteListing !== null ){
        await deleteItem(deleteListing)
      }
      
    } 
    deleted()
   

  },[deleteListing])
  
  const fetchUSERListings = async () => {
    const response = await fetch(`/api/listings/user/${user.id}`)

    const data = await response.json()
    
     setListings(data)
     
  }
  



  const handleEdit = (e)=>{
    setEditId(e)
    
  }

  const handleDelete = (e)=>{
    setDeleteListing(e)
    setEditId(null)
    console.log(deleteListing)
  }

  return (
    <div className='container flex mx-auto gap-2 justify-center pt-10'>
        
       <div className=' max-h-screen'>
        <h2 className='text-3xl font-bold'>My Listings</h2>

        {listings.map((listing)=><UserListing key={listing.id} handleEdit={handleEdit} listing={listing} handleDelete={handleDelete}/>)} </div>
       <div>
        {editId == null ? <Profile  /> :<EditListing id={editId} />}
        
       </div>
    </div>
  )
}
export default ProfileDashBoard