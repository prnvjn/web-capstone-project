import React ,{useEffect,useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Adjust the path as needed
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';


function App() {
  // const API_URL = process.env.NODE_ENV === 'production' ? 'web-capstone-project-production.up.railway.app':'http://localhost:3001' 
  const API_URL = 'web-capstone-project-production.up.railway.app'
    const [user, setUser] = useState([])


    useEffect(() => {
        const getUser = async () => {
          const response = await fetch(`${API_URL}/auth/login/success`, { credentials: 'include' } )
          const json = await response.json()
          setUser(json.user)
        }
    
       
        getUser()
       
      }, [API_URL]);

 

      const logout = async () => {
        const url = `${API_URL}/auth/logout`
        const response = await fetch(url, { credentials: 'include' })
        await response.json()
        window.location.href = '/'
      }


    return (
        <AuthProvider user={user}  logout={logout} >
            <Router>
                <Navbar  />

                <AppRoutes user={user}  url={API_URL}/>
            </Router>
        </AuthProvider>
    );
}

export default App;
