import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route    
} from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { routes } from './routes/allRoutes';

export const App = () => {
  return (
    <Router>
       <div>
        <Routes>
          {routes.map((route, i) => {
            console.log(route)
            return(
            <Route 
              key={i}
              path={route.path} 
              element={ <route.component/> }
            />
          )})}
        </Routes>
       </div> 
    </Router>
  )
}
