import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h3 className="text-primary my-2 text-start text-xl">My Profile</h3>
            <div className=''>
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="">
                            <div className="avatar mb-2">
                                <div className="w-30 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </div>
                            <div>
                                <h4 className='mb-2'>Name: {user?.displayName}</h4>
                                <h4 className='mb-2'>Name: {user?.email}</h4>
                                <h4 className='mb-2 '>Role: {user?.role || 'Admin / Doctor/ Staff'}</h4>
                                <h4 className='mb-2 '>Education: {user?.education || ' '}</h4>
                                <h4 className='mb-2 '>Address: {user?.address || ' '}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;