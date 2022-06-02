import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {

    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>

        {
            user && <>
                <li><Link to="/staff">Staff</Link></li>
                <li><Link to="/doctor">Doctor</Link></li>
                <li><Link to="/admin">Admin</Link></li>
            </>
        }
        <li>{user ? <Link to='' className="" onClick={logout} >Sign Out</Link> : <Link to="/login">Login</Link>}</li>
        <li>
            {user ? <span to='' className="">{user?.displayName}</span> : ''}
        </li>
        <li>
            {user ? <div className='avatar'>
                <div className='w-10 rounded-full ring ring-primary ring-offset-base-100'>
                    <img src={user?.photoURL} alt="user" />
                </div>
            </div> : ''}
        </li>
    </>
    return (
        <div className='sticky top-0 bg-white z-40 drop-shadow-xl '>

            <div className="navbar bg-base-30 max-w-7xl mx-auto px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold"><span className='text-primary'>Hospital</span></Link>
                </div>
                <div className="navbar-end hidden lg:flex min-w-fit">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end lg:hidden">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;