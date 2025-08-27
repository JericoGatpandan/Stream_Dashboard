import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

function WaterLevelGraph() {
    // Sample data - replace with your actual data
    const data = [
        { time: '18:00', level: 2.5 },
        { time: '19:00', level: 2.8 },
        { time: '20:00', level: 3.2 },
        { time: '21:00', level: 3.8 },
        { time: '22:00', level: 4.2 },
        { time: '23:00', level: 4.5 },
        { time: '00:00', level: 4.8 },
        { time: '01:00', level: 5.02 },
        { time: '02:00', level: 4.9 },
        { time: '03:00', level: 4.7 },
        { time: '04:00', level: 4.3 },
        { time: '05:00', level: 4.0 },
        { time: '06:00', level: 3.7 },
    ]

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 shadow-md rounded-md border border-gray-200">
                    <p className="text-[#5D7285] font-medium">{`Time: ${label}`}</p>
                    <p className="text-[#0C7FDA] font-bold">
                        {`Water Level: ${payload[0].value}m`}
                    </p>
                </div>
            )
        }
        return null
    }

    return (
        <div className="w-full h-[400px] bg-white rounded-[10px] shadow-md relative"> {/* Increased height */}
            <div className="w-full h-[394px] mx-auto my-1 bg-[#E9F5FE] rounded-[10px] border border-black"> {/* Adjusted inner height */}
                {/* Water Level Label */}
                <div className="absolute left-[6px] top-[171px] transform -rotate-90 text-[#0C7FDA] text-[13px] font-medium">
                    Water Level
                </div>

                {/* Chart */}
                <div className="w-full h-full pl-[40px] pr-[20px] py-[20px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#0C7FDA" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#0C7FDA" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#667A8A" opacity={0.3} />
                            <XAxis
                                dataKey="time"
                                tick={{ fill: '#5D7285', fontSize: 13 }}
                                axisLine={{ stroke: '#667A8A' }}
                            />
                            <YAxis
                                domain={[0, 6]}
                                ticks={[0, 1, 2, 3, 4, 5]}
                                tick={{ fill: '#667A8A', fontSize: 13 }}
                                axisLine={{ stroke: '#667A8A' }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="level"
                                stroke="#0C7FDA"
                                fill="url(#colorLevel)"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default WaterLevelGraph