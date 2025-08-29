import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Search } from 'lucide-react';

function FloodGraph({ data }) {
    // Sample data structure
    const sampleData = [
        { time: '00:00', KGE: 0.85, NSE: 0.82, CRPS: 0.15, Coverage: 0.92 },
        { time: '06:00', KGE: 0.87, NSE: 0.84, CRPS: 0.14, Coverage: 0.93 },
        { time: '12:00', KGE: 0.89, NSE: 0.86, CRPS: 0.13, Coverage: 0.94 },
        // ... more data points
    ];

    return (
        <div className="w-full h-[600px] bg-white p-4 shadow-lg rounded-lg">
            <div className='flex justify-between items-center pb-3 pt-0 p-8 '>
                <div className="mt-4 text-[#5D7285] text-[20px] font-poppins font-semibold leading-[28.1px] tracking-[0.2px]">
                    Flood Exceedance Probability & Hydrograph
                </div>

                <div className='flex items-center gap-5 '>
                    <Search size={16} />
                    <input type="search" name="search" id="" placeholder='Search' />
                </div>
            </div>
            <div className="h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={data || sampleData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="KGE"
                            stroke="#0C7FDA"
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="NSE"
                            stroke="#82ca9d"
                            strokeWidth={2}
                        />
                        <Line
                            type="monotone"
                            dataKey="CRPS"
                            stroke="#ffc658"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
}

export default FloodGraph;