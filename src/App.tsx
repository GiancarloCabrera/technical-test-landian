import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
//CON LINK MANDO A DONDE QUIERO ENVIAR LA PAGINAAAAAAAAAA
  Link    
} from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { routes } from './routes/allRoutes';

export const App = () => {
  return (
    <Router>
       <Navbar/>
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
