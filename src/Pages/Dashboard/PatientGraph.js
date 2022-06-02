import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const PatientGraph = () => {
    const data = [
        {
            "month": "Mar",
            "corona": 100,
            "died": 10,
            "healed": 90
        },
        {
            "month": "Apr",
            "corona": 2000,
            "died": 400,
            "healed": 1600
        },
        {
            "month": "May",
            "corona": 10000,
            "died": 3990,
            "healed": 6010
        },
        {
            "month": "Jun",
            "corona": 5000,
            "died": 1000,
            "healed": 4000
        },
        {
            "month": "Jul",
            "corona": 6000,
            "died": 2000,
            "healed": 4000
        },
        {
            "month": "Aug",
            "corona": 7000,
            "died": 1000,
            "healed": 6000
        }
    ]

    return (
        <div className='chart-container my-4 max-w-sm'>
            <div className="chart-container-left mx-auto">
                <p className='text-2xl  text-primary '>Monthly recovery and mortality</p>
                <LineChart width={600} height={400} data={data}>
                    <Line dataKey={'healed'} stroke="green"></Line>
                    <Line dataKey={'died'} stroke="red"></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis></YAxis>
                </LineChart>
            </div>

            <div className="">
                <p className='text-2xl  text-primary'>Covid vs Healed</p>

                <AreaChart
                    width={600}
                    height={400}
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Legend />
                    <Tooltip />
                    <Area type="monotone" dataKey="healed" stackId="1" stroke="green" fill="green" />
                    <Area type="monotone" dataKey="died" stackId="1" stroke="red" fill="red" />
                    <Area type="monotone" dataKey="corona" stackId="1" stroke="#FFCC00" fill="#FFCC00" />
                </AreaChart>
            </div>
        </div>
    );
};
export default PatientGraph;