import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Doctor = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile my-10">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-4xl font-bold text-primary mb-2'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mr-4 rounded-xl border-2">
                    {
                        user && <>
                            <li><Link to="/doctor">My Profile</Link></li>
                            <li><Link to="/doctor/patient">Patients</Link></li>
                            <li><Link to="/doctor/graph">Patients Graph</Link></li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};


export default Doctor;