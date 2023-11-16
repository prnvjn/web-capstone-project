import React ,{useEffect,useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust the path as needed
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';


function App() {
    const API_URL = 'http://localhost:3001' 
    const [user, setUser] = useState([])
    const [listings, setListings] = useState([])

    useEffect(() => {
        const getUser = async () => {
          const response = await fetch(`${API_URL}/auth/login/success`, { credentials: 'include' } )
          const json = await response.json()
          setUser(json.user)
        }
    
        const fetchListings = async () => {
          const response = await fetch(`${API_URL}/api/listings`)
    
          const data = await response.json()
          console.log(data)
           setListings(data)
        }
      
        getUser()
        fetchListings()
      }, []);

      const logout = async () => {
        const url = `${API_URL}/auth/logout`
        const response = await fetch(url, { credentials: 'include' })
        await response.json()
        window.location.href = '/'
      }


    return (
        <AuthProvider >
            <Router>
                <Navbar user={user} />
{console.log(listings)}
                <AppRoutes user={user} listings={listings} url={API_URL}/>
            </Router>
        </AuthProvider>
    );
}

export default App;
