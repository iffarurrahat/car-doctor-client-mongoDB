import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Service from "../pages/Service/Service";
import Home from "../pages/home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/service',
                element: <Service />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
])

export default router;