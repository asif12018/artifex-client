import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './root/Root.jsx';
import Home from './pages/Home.jsx';
import AuthProvider from './components/provider/AuthProvider.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/login/Login.jsx';
import Addproduct from './pages/Addproduct.jsx';
import ItemDetails from './pages/ItemDetails.jsx';
import AllItems from './pages/AllItems.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/add",
        element:<Addproduct></Addproduct>
      },
      {
        path:"/details/:id",
        element:<ItemDetails></ItemDetails>,
        loader:({params})=> fetch(`http://localhost:5000/items/${params.id}`)
      },
      {
        path:"/items",
        element:<AllItems></AllItems>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
