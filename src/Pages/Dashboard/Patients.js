import React, { useEffect, useState } from 'react';

const Patients = () => {
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
            <h3 className="text-primary my-2 text-start text-xl">All Patients</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Doctor Name</th>
                            <th>Email</th>
                            <th>Disease</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user?._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.disease}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Patients;