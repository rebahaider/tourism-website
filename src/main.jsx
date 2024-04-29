import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AllTourists from './components/AllTourists/AllTourists';
import AddTourists from './components/AddTourists/AddTourists';
import MyList from './components/MyList/MyList';
import AuthProviders from './Providers/AuthProviders';
import PrivateRoutes from './routes/PrivateRoutes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/allTourists",
        element: <AllTourists></AllTourists>,
        loader: () => fetch('http://localhost:5000/addTourists')
      },

    ],

  },
  {
    path: "/addTourists",
    element: <PrivateRoutes><AddTourists></AddTourists></PrivateRoutes>
  },
  {
    path: "/myList",
    element: <PrivateRoutes><MyList></MyList></PrivateRoutes>
  }


]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
