import { useRoutes } from 'react-router-dom';
import ProfileCreation from './pages/ProfileCreation';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ViewListings from './pages/ViewListings';
import AddListing from './pages/AddListing'; // Adjust the path as needed
import ListingDetails from './pages/ListingDetails';
import EditListing from './pages/EditListing';



const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <LandingPage /> },
        { path: "/create-profile", element: <ProfileCreation /> },
        { path: "/login", element: <LoginPage /> },

        // Add other routes here
        
        { path: "/view-listings", element: <ViewListings /> },
        { path: "/add-listing", element: <AddListing /> },
        { path: "/listings/:id", element: <ListingDetails /> },
        { path: "/edit-listing/:id", element: <EditListing /> },



    ]);

    return routes;
};

export default AppRoutes;
