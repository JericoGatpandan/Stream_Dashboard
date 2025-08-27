import React from 'react'

function SensorStatus() {
    const sensors = [
        { id: 1, name: "Naga River - Station 1", location: "Barangay Triangulo", status: "Active", color: "#1DBD5A" },
        { id: 2, name: "Naga River - Station 2", location: "Barangay Triangulo", status: "Inactive", color: "#D61313" },
        { id: 3, name: "Naga River - Station 3", location: "Barangay Triangulo", status: "Unstable", color: "#EBD639" },
        { id: 4, name: "Naga River - Station 4", location: "Barangay Triangulo", status: "Active", color: "#1DBD5A" },
    ]

    return (
        <div className="w-full bg-white rounded-[10px] p-6 shadow-[0px_2px_10px_rgba(0,0,0,0.25)]">
            {/* Title */}
            <div className="mb-6">
                <h2 className="text-[#5D7285] text-[20px] font-poppins font-semibold leading-[28.1px] tracking-[0.2px] text-center">
                    Sensors
                </h2>
            </div>

            {/* Sensor List */}
            <div className="flex flex-col gap-4">
                {sensors.map((sensor) => (
                    <div key={sensor.id} className="flex items-start justify-between w-full hover:bg-gray-50 p-2 rounded-lg transition-all duration-200">
                        {/* Left Side - Station Info */}
                        <div className="flex flex-col gap-0.5">
                            <span className="text-black text-[13px] font-instrument-sans font-semibold">
                                {sensor.name}
                            </span>
                            <span className="text-black text-[13px] font-instrument-sans font-semibold">
                                {sensor.location}
                            </span>
                        </div>

                        {/* Right Side - Status and Button */}
                        <div className="flex flex-col items-end gap-2">
                            {/* Status */}
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-[9px] h-[9px] rounded-full"
                                    style={{ background: sensor.color }}
                                />
                                <span className="text-[#666666] text-[12px] font-instrument-sans font-semibold w-[66px] text-center">
                                    {sensor.status}
                                </span>
                            </div>

                            {/* Button */}
                            <button className="w-[68px] h-[15px] bg-[#E9F5FE] rounded-[5px] border border-black/20 flex items-center justify-center hover:shadow-sm transition-shadow duration-200">
                                <span className="text-black text-[7px] font-poppins font-normal leading-none tracking-[0.07px]">
                                    More Info
                                </span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SensorStatus