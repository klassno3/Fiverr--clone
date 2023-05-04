import React from "react"
import "./App.scss"
import NavBar from "./component/navbar/NavBar.jsx"
import Footer from "./component/footer/Footer.jsx"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import Add from "./pages/add/Add.jsx"
import Gig from "./pages/gig/Gig.jsx"
import Gigs from "./pages/gigs/Gigs.jsx"
import Login from "./pages/login/Login.jsx"
import Message from "./pages/message/Message.jsx"
import Messages from "./pages/messages/Messages.jsx"
import MyGigs from "./pages/myGigs/MyGigs.jsx"
import Order from "./pages/order/Order.jsx"
import Register from "./pages/register/Register.jsx"



function App  () {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer/>
      </>
    )
  }

  const router = createBrowserRouter([
  {
    path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home/>
      },
        {
          path: "/add",
          element:<Add/>
      },
        {
          path: "/gig/:id",
          element:<Gig/>
      },
        {
          path: "/gigs",
          element:<Gigs/>
      },
        {
          path: "/login",
          element:<Login/>
      },
        {
          path: "/message/:id",
          element:<Message/>
      },
        {
          path: "/messages",
          element:<Messages/>
      },
        {
          path: "/mygigs",
          element:<MyGigs/>
      },
        {
          path: "/order",
          element:<Order/>
      },
        {
          path: "/register",
          element:<Register/>
      }
    ],
  },
]);

  return (
    
    <div>
       <RouterProvider router={router} />
      
      </div>
      
 
  )
}

export default App
