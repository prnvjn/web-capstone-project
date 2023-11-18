import { useRoutes } from 'react-router-dom';
import ProfileCreation from './pages/ProfileCreation';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ViewListings from './pages/ViewListings';
import AddListing from './pages/AddListing'; // Adjust the path as needed
import ListingDetails from './pages/ListingDetails';
import EditListing from './pages/EditListing';
import { useContext } from 'react';
import { useAuth } from './context/AuthContext';
import ProfileDashBoard from './pages/ProfileDashBoard';
// import {user , data} from "./"



const AppRoutes = (props) => {
    // const user = props.user
    // const listings = props.listings
const {user, data} = useAuth()
    let routes = useRoutes([
        // { path: "/", element: <LandingPage /> },
        // { path: "/create-profile", element: <ProfileCreation /> },
        // { path: "/login", element: <LoginPage /> },

        // // Add other routes here
        // // { path: "/other-path", element: <OtherComponent /> },

        // {path: "/view-listings", element: <ViewListings/>}

        {
            path:'/',
            element: user && user.id?
            <ViewListings  user={user} data={data} /> : <LandingPage url={props.url}/>
        },
        { path: "/add-listing", element:  user && user.id? <AddListing />: <LandingPage url={props.url}/> },
        { path: "/my-dashboard", element:  user && user.id? <ProfileDashBoard />: <LandingPage url={props.url}/> },

        // Add other routes here
        // Fazeel code-base
        // { path: "/view-listings", element: <ViewListings /> },
        // 
        { path: "/listings/:id", element: <ListingDetails /> },
        // { path: "/edit-listing/:id", element: <EditListing /> },



    ]);

    return routes;
};

export default AppRoutes;
