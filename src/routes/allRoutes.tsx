import { Navigate } from "react-router-dom";
import { Error } from '../pages/Error/Error';
import { Home } from '../pages/MainPage/Home';

interface RouteProps {
    path: string;
    component: any;
}

const routes: Array<RouteProps> = [
    { path: '/home', component: Home },
    { path: '*', component: Error},
    //This route has to be kept here, being the last one
    { path: '/', component: () => <Navigate to='/home'/> },
]

export { routes };
