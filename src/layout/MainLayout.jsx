import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default MainLayout;