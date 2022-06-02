import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Admin = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile my-10">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-primary mb-3'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mr-4 rounded-xl border-2">
                    {
                        user && <>
                            <li><Link to="/admin">My Profile</Link></li>
                            <li><Link to="/admin/allUser">All User</Link></li>
                            <li><Link to="/admin/createDoctor">Create Doctor</Link></li>
                            <li><Link to="/admin/createStaff">Create Staff</Link></li>
                            <li><Link to="/admin/createBranch">Create Branch</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Admin;