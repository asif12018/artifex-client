import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";


const Navbar = () => {
    //context api data
    const {user, userSignOut, setUser} = useContext(AuthContext)
    const navlinks = <>
        <li><NavLink to={'/'}>home</NavLink ></li>
        <li><NavLink to={'/items'}>All items</NavLink></li>
        <li><NavLink to={'/add'}>Add items</NavLink></li>
        <li><NavLink to={'/myItems'}>my items</NavLink></li>
        <li><NavLink to={'/register'}>register</NavLink></li>

    </>
    //logout function
    const handleLogOut = () =>{
        userSignOut()
        .then(() => {
            // Sign-out successful.
            setUser(null)
            console.log('user logout success full')
          }).catch((error) => {
            // An error happened.
            console.log(error);
          });
    }
    
    return (
        <div className="navbar bg-base-100 my-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl"><img className="max-h-[35px]"  src="https://i.postimg.cc/zXdTDq00/logo-removebg-preview.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><div className="w-10 rounded-full">
                    <img className="rounded-full " alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                  </div><a onClick={handleLogOut} className="btn mx-2">logout</a></> : <Link to={'/login'} className="btn">login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;