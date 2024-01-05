import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Service from "../pages/Service/Service";
import Home from "../pages/home/Home/Home";

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
    }
])

export default router;