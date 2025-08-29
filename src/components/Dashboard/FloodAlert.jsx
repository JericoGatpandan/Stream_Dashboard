import React from 'react'
import { AlertTriangle } from 'lucide-react'

function FloodAlert() {
    return (
        <div className="w-full h-[150px] bg-[#F64B3C] rounded-[20px] relative overflow-hidden p-4">
            {/* Alert Icon */}
            <div className="absolute left-[22px] top-[28px] z-10">
                <AlertTriangle
                    size={76}
                    className="text-white"
                    style={{ strokeWidth: 2 }}
                />
            </div>

            {/* Main Content */}
            <div className="absolute left-[112px] top-[13.58px] flex flex-col gap-[10px] max-w-[260px]">
                <h2 className="text-white text-[30px] font-poppins font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                    Severe Flood Alert
                </h2>
                <p className="text-white text-[14px] font-poppins font-normal leading-[18.2px] tracking-[0.28px]">
                    P. Diaz Street, Sta. Cruz Naga City
                </p>
                <button className="w-[100px] h-[20px] hover:bg-blue-200 bg-white rounded-[5px] p-4 flex items-center justify-center mt-1">
                    <span className="text-[#5D7285] text-[13.33px] font-poppins font-normal leading-[24px] tracking-[0.13px]">
                        More Info
                    </span>
                </button>
            </div>

            {/* Decorative Circles */}
            <div className="absolute left-[27.11px] top-[75px] w-[13.66px] h-[13.66px] bg-[#C81912] rounded-full" />
            <div className="absolute left-[66px] top-[59px] w-[26px] h-[26px] bg-[#C81912] rounded-full" />
            <div className="absolute left-[17px] top-[47.63px] w-[6.98px] h-[6.98px] bg-[#C81912] rounded-full transform -rotate-[22deg]" />
        </div>
    )
}

export default FloodAlert