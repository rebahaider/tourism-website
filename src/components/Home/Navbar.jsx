import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('User successfully loged out'))
            .catch(error => {
                console.error(error);
            })
    }

    const navLinks = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/allTourists"}>All Tourists Spot</NavLink></li>
        {   user &&
            <>

                <li><NavLink to={"/addTourists"}>Add Tourists Spot</NavLink></li>
                <li><NavLink to={"/myList"}>My List</NavLink></li>

            </>
        }
        <li><NavLink to={"/login"}>Login</NavLink></li>
        <li><NavLink to={"/register"}>Register</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Tourism Website</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span className="mr-4">{user.email}</span>
                        <a onClick={handleLogOut} className="btn btn-sm">Sign Out</a>
                    </>
                        :
                        <a onClick={handleLogOut} className="btn btn-sm hidden">Sign Out</a>


                }

            </div>
        </div>
    );
};

export default Navbar;