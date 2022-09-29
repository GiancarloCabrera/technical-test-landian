import { Navigate } from "react-router-dom";
import { Details } from '../pages/Details/Details';
import { Error } from '../pages/Error/Error';
import { Home } from '../pages/MainPage/Home';

interface RouteProps {
    path: string;
    component: any;
    // exact?: boolean;
}

const routes: Array<RouteProps> = [
    { path: '/error404', component: Error },
    { path: '/details', component: Details },
    { path: '/home', component: Home },
    //This route has to be kept here, being the last one
    { path: '/', component: () => <Navigate to='/home'/> }
]

export { routes };
