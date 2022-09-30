import {
  BrowserRouter as Router,
  Routes,
  Route    
} from "react-router-dom";
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
