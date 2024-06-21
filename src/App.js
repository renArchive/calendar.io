import { useEffect, useState } from 'react';
import {
  Outlet,
  Navigate,
  useLocation,
  RouterProvider, 
  createBrowserRouter
} from 'react-router-dom';
import { auth } from './firebase';

import Login from './pages/login';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import Calendar from './pages/calendar';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return unsubscribe;
  }, []);

  const PrivateRoutes = () => {
    const location = useLocation();
  
    return isLoggedIn
      ? <Outlet />
      : <Navigate to="/" replace state={{ from: location }} />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      element: <PrivateRoutes />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/calendar",
          element: <Calendar/>,
        },
      ],
    },
  ]);
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
