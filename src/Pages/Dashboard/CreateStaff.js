import React, { useEffect, useState } from 'react';

const CreateStaff = () => {
    const [staffs, setStaffs] = useState([]);

    useEffect(() => {
        fetch('/user.json')
            .then(res => res.json())
            .then(data => {
                setStaffs(data)
                console.log(data)
            });

    }, [])
        ;
    return (
        <div>
            <div className='lg:w-2/3 mx-auto shadow-xl productId  bg-base-100'>
                <div className='p-3 w-full'>
                    <form className='  px-4 '>
                        <h1 className="text-xl font-bold text-primary">Add A New Staff</h1>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Staff's name" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Staff's Email" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Specialty</span>
                            </label>
                            <input type="text" placeholder="Staff's Role" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <button className='btn text-white btn-primary my-3'>Add Staff</button>
                        </div>
                    </form>
                </div>
            </div>
            <h3 className="text-primary my-2 text-start text-xl">All Staff</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Staff Name</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            staffs.map((staff, index) => <tr key={staff?._id}>
                                <th>{index + 1}</th>
                                <td>{staff?.name}</td>
                                <td>{staff?.email}</td>
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

export default CreateStaff;