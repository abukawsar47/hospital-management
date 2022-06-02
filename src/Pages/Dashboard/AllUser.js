import React, { useEffect, useState } from 'react';

const AllUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/user.json')
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                console.log(data)
            });

    }, [])
        ;
    return (
        <div>
            <h3 className="text-primary my-2 text-start text-xl">All Users</h3>
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
                            users.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td><button className='btn btn-xs'>Make Admin</button></td>
                                <td><button className='btn btn-xs'>Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUser;