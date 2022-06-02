import React from 'react';
import Patients from './Patients';

const AddPatient = () => {
    return (
        <div>
            <div className='lg:w-2/3 mx-auto shadow-xl productId  bg-base-100'>
                <div className='p-3 w-full'>
                    <form className='  px-4 '>
                        <h1 className="text-xl font-bold text-primary">Add Patients</h1>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Patient's name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Patient's Email" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Disease</span>
                            </label>
                            <input type="text" placeholder="Disease" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <button className='btn text-white btn-primary my-3'>Add Patient</button>
                        </div>
                    </form>
                </div>
            </div>
            <Patients></Patients>
        </div>
    );
};

export default AddPatient;