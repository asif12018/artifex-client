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
import PrivateRoutes from './components/protectedRoute/PrivateRoutes.jsx';
import MyItems from './pages/MyItems.jsx';
import EditProduct from './pages/EditProduct';
import ErrorPage from './pages/ErrorPages';
import FilterByCategory from './pages/FilterByCategory.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element:<PrivateRoutes><Addproduct></Addproduct></PrivateRoutes>
      },
      {
        path:"/details/:id",
        element:<PrivateRoutes><ItemDetails></ItemDetails></PrivateRoutes>,
        loader:({params})=> fetch(`https://artifex-server-site.vercel.app/items/${params.id}`)
      },
      {
        path:"/items",
        element:<PrivateRoutes><AllItems></AllItems></PrivateRoutes>
      },
      {
        path:'/myItems',
        element:<PrivateRoutes><MyItems></MyItems></PrivateRoutes>
      },
      {
        path:'/edit/:id',
        element:<EditProduct></EditProduct>,
        loader: ({params})=>fetch(`https://artifex-server-site.vercel.app/items/${params.id}`)
      },
      {
        path:'/filter/:category',
        element:<FilterByCategory></FilterByCategory>
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
