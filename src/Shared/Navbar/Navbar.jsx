import { NavLink } from "react-router-dom";
import Container from "../../ui/Container";
import navLogo from "../../assets/nav_logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut();
    };

    const links = <>
        <li>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isActive
                    ? "bg-inherit hover:bg-inherit text-primary font-bold"
                    : isPending
                        ? "pending"
                        : "bg-inherit hover:bg-inherit"
            }>Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({ isActive, isPending }) =>
                isActive
                    ? "bg-inherit hover:bg-inherit text-primary font-bold"
                    : isPending
                        ? "pending"
                        : "bg-inherit hover:bg-inherit"
            }>About</NavLink>
        </li>
        <li>
            <NavLink to="/service" className={({ isActive, isPending }) =>
                isActive
                    ? "bg-inherit hover:bg-inherit text-primary font-bold"
                    : isPending
                        ? "pending"
                        : "bg-inherit hover:bg-inherit"
            }>Service</NavLink>
        </li>
        <li>
            <NavLink to="/blog" className={({ isActive, isPending }) =>
                isActive
                    ? "bg-inherit hover:bg-inherit text-primary font-bold"
                    : isPending
                        ? "pending"
                        : "bg-inherit hover:bg-inherit"
            }>Blog</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={({ isActive, isPending }) =>
                isActive
                    ? "bg-inherit hover:bg-inherit text-primary font-bold"
                    : isPending
                        ? "pending"
                        : "bg-inherit hover:bg-inherit"
            }>Contact</NavLink>
        </li>
        {
            user?.email ?
                <>
                    <li>
                        <NavLink to="/bookings" className={({ isActive, isPending }) =>
                            isActive
                                ? "bg-inherit hover:bg-inherit text-primary font-bold"
                                : isPending
                                    ? "pending"
                                    : "bg-inherit hover:bg-inherit"
                        }>My Bookings</NavLink>
                    </li>
                    <li onClick={handleSignOut}>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isActive
                                ? "bg-inherit hover:bg-inherit"
                                : isPending
                                    ? "pending"
                                    : "bg-inherit hover:bg-inherit"
                        }>Logout</NavLink>
                    </li>
                </> :
                <li>
                    <NavLink to="/login" className={({ isActive, isPending }) =>
                        isActive
                            ? "bg-inherit hover:bg-inherit text-primary font-bold"
                            : isPending
                                ? "pending"
                                : "bg-inherit hover:bg-inherit"
                    }>Login</NavLink>
                </li>

        }
    </>

    return (
        <>
            <Container>
                <div className="navbar p-0 font-inter py-1">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="cursor-pointer lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 py-5 border">
                                {links}
                            </ul>
                        </div>
                        <a className="text-xl md:text-3xl font-extrabold ml-auto lg:ml-0">
                            <img className="w-2/3 md:w-20" src={navLogo} alt="" />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex custom_nav_style">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="capitalize text-primary border border-primary py-2 px-4 rounded font-semibold hover:bg-primary hover:text-white cursor-pointer hover:ease-in hover:duration-300">Appointment</a>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Navbar;



