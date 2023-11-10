import { useRoutes } from 'react-router-dom';
import ProfileCreation from './pages/ProfileCreation';
import ViewListings from './pages/ViewListings';


const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/create-profile", element: <ProfileCreation /> },
        // Add other routes here
        // { path: "/other-path", element: <OtherComponent /> },
        {path: "/view-listings", element: <ViewListings/>}
    ]);

    return routes;
};

export default AppRoutes;
