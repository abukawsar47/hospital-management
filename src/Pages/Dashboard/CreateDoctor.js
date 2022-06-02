import React, { useEffect, useState } from 'react';

const CreateDoctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('/user.json')
            .then(res => res.json())
            .then(data => {
                setDoctors(data)
                console.log(data)
            });

    }, [])
        ;
    return (
        <div>
            <div className='lg:w-2/3 mx-auto shadow-xl productId  bg-base-100'>
                <div className='p-3 w-full'>
                    <form className='  px-4 '>
                        <h1 className="text-xl font-bold text-primary">Add A New Doctor</h1>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Doctor's name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Doctor's Email" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <input type="text" placeholder="Doctor's Specialty" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <button className='btn text-white btn-primary my-3'>Add Doctor</button>
                        </div>
                    </form>
                </div>
            </div>
            <h3 className="text-primary my-2 text-start text-xl">All Doctors</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Doctor Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <tr key={doctor?._id}>
                                <th>{index + 1}</th>
                                <td>{doctor?.name}</td>
                                <td>{doctor?.email}</td>
                                <td><button className='btn btn-xs btn-warning'>Edit</button></td>
                                <td><button className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default CreateDoctor;