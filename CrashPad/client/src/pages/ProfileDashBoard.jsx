import React,{useState,useEffect} from 'react'
import { useAuth } from '../context/AuthContext'
import UserListing from '../components/userListing'

const ProfileDashBoard = () => {



const {user} = useAuth()
const API_URL = 'http://localhost:3001' 
// const [user, setUser] = useState([])
const [listings, setListings] = useState([])

useEffect(() => {
    

    const fetchUSERListings = async () => {
      const response = await fetch(`${API_URL}/api/listings/user/${user.id}`)

      const data = await response.json()
      
       setListings(data)
    }
  

    fetchUSERListings()
  }, []);


  return (
    <div>ProfileDashBoard
        
       <div>{listings.map((listing)=><UserListing listing={listing}/>)} </div>
       <div></div>
    </div>
  )
}
export default ProfileDashBoard