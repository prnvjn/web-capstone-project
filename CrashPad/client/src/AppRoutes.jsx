import { useRoutes } from 'react-router-dom';
import ProfileCreation from './pages/ProfileCreation';


const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/create-profile", element: <ProfileCreation /> },
        // Add other routes here
        // { path: "/other-path", element: <OtherComponent /> },
    ]);

    return routes;
};

export default AppRoutes;
