import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { AuthContext } from './context/AuthContext'
import PrivateRoute from './privateRoute/PrivateRoute'
import PublicRoute from './publicRoute/PrivateRoute'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = (localStorage.getItem('user') || false);
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute><Register /></PublicRoute> 
    },
    {
      path: "/login",
      element: <PublicRoute><Login /></PublicRoute> 
    },
    {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard /></PrivateRoute>
    },

  ])

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </>
  )
}

export default App
