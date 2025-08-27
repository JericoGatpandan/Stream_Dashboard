import React from 'react'
import { ChevronDown } from 'lucide-react'
import FloodGraph from './FloodGraph'
import FloodAlert from './FloodAlert'
import SensorStatus from './SensorStatus'
import WaterLevelGraph from './WaterLevelGraph'

function Dashboard() {
    return (
        <div className='w-full h-full p-5 overflow-x-hidden'>
            {/* Main Container */}
            <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="w-[419px] h-[29px] flex gap-3 items-center">
                    <span className="text-[#5D7285] text-[33px] font-epilogue font-semibold leading-[28.1px] tracking-[0.33px]">
                        Dashboard:{' '}
                    </span>
                    <span className="text-[#0C7FDA] text-[33px] font-epilogue font-semibold leading-[28.1px] tracking-[0.33px]">
                        Panicuason
                    </span>
                    <ChevronDown size={24} strokeWidth='3' className='text-[#5D7285]' />
                </div>

                {/* Content Grid */}
                <div className='grid grid-cols-13 gap-4'>
                    {/* Left Column - Flood Graph */}
                    <div className="col-span-9">
                        <div className="w-full h-[520px] bg-white shadow-[0px_2px_10px_rgba(0,0,0,0.25)]">
                            <FloodGraph />
                        </div>
                    </div>

                    {/* Right Column - Alert and Sensors */}
                    <div className="col-span-4 flex flex-col gap-4 ">
                        <div className="w-full">
                            <FloodAlert />
                        </div>
                        <div className="w-full flex-1">
                            <SensorStatus />
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Water Level Graph */}
                <div className='w-full mt-4 px-4'> {/* Adjusted container */}
                    <WaterLevelGraph />
                </div>
            </div>
        </div>
    )
}

export default Dashboard