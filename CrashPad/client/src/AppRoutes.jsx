import { useRoutes } from 'react-router-dom';
import ProfileCreation from './pages/ProfileCreation';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';


const AppRoutes = () => {
    let routes = useRoutes([
        { path: "/", element: <LandingPage /> },
        { path: "/create-profile", element: <ProfileCreation /> },
        { path: "/login", element: <LoginPage /> },
    ]);

    return routes;
};

export default AppRoutes;
