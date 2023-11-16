import { useRoutes } from 'react-router-dom';
import ProfileCreation from './pages/ProfileCreation';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import ViewListings from './pages/ViewListings';
import AddListing from './pages/AddListing'; // Adjust the path as needed
import ListingDetails from './pages/ListingDetails';
import EditListing from './pages/EditListing';



const AppRoutes = (props) => {
    const user = props.user
    const listings = props.listings
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
            <ViewListings user={user} data={listings} /> : <LandingPage url={props.url}/>
        }

        // Add other routes here
        // Fazeel code-base
        // { path: "/view-listings", element: <ViewListings /> },
        // { path: "/add-listing", element: <AddListing /> },
        // { path: "/listings/:id", element: <ListingDetails /> },
        // { path: "/edit-listing/:id", element: <EditListing /> },



    ]);

    return routes;
};

export default AppRoutes;
