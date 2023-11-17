import React,{useState,useEffect} from 'react'
import { useAuth } from '../context/AuthContext'
import UserListing from '../components/userListing'
import EditListing from './EditListing'
import { Profile } from '../components/Profile'

const ProfileDashBoard = () => {



const {user} = useAuth()
const API_URL = 'http://localhost:3001' 
// const [user, setUser] = useState([])
const [listings, setListings] = useState([])
const [editId, setEditId]=useState(null)
useEffect(() => {
    

    const fetchUSERListings = async () => {
      const response = await fetch(`${API_URL}/api/listings/user/${user.id}`)

      const data = await response.json()
      
       setListings(data)
    }
  

    fetchUSERListings()
  }, []);
  const handleEdit = (e)=>{
    setEditId(e)
    console.log(e)
  }

  return (
    <div className='container flex mx-auto gap-2 justify-center pt-10'>
        
       <div className=' max-h-screen'>
        <h2 className='text-3xl font-bold'>My Listings</h2>

        {listings.map((listing)=><UserListing key={listing.id} handleEdit={handleEdit} listing={listing}/>)} </div>
       <div>
        {editId == null ? <Profile  /> :<EditListing id={editId} />}
        {console.log(editId)}
       </div>
    </div>
  )
}
export default ProfileDashBoard