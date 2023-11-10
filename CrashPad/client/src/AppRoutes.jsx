import { useRoutes } from 'react-router-dom';
import ProfileCreation from './pages/ProfileCreation';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

import ViewListings from './pages/ViewListings';



const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <LandingPage /> },
        { path: "/create-profile", element: <ProfileCreation /> },
        { path: "/login", element: <LoginPage /> },

        // Add other routes here
        // { path: "/other-path", element: <OtherComponent /> },

        {path: "/view-listings", element: <ViewListings/>}
    ]);

    return routes;
};

export default AppRoutes;
