import React from 'react'
import { Bell, UserCircle, PanelRightOpen, PanelLeftOpen } from 'lucide-react'


function Header({ isMinimized, toggleSidebar }) {
    return (
        <div className="w-full h-[100px] px-[50px] py-5 bg-white shadow-[0px_4px_40px_rgba(0,0,0,0.25)] flex items-center">
            {/* Left section with Panel icon */}
            <div className="flex items-center">
                {isMinimized ? (
                    <PanelLeftOpen
                        size={30}
                        className="text-[#5D7285] cursor-pointer transition-transform hover:scale-110"
                        onClick={toggleSidebar}
                        style={{strokeWidth: 2.5}}
                    />
                ) : (
                    <PanelRightOpen
                        size={30}
                        className="text-[#5D7285] cursor-pointer transition-transform hover:scale-110"
                        onClick={toggleSidebar}
                        style={{strokeWidth: 2.5}}
                    />
                )}
            </div>

            {/* Center section with title */}
            <h1 className="flex-1 text-[#5D7285] text-[32px] font-bold font-poppins leading-6 text-center">
                NAGA CITY RIVER MONITORING SYSTEM
            </h1>

            {/* Right section with date, notification and profile */}
            <div className="flex items-center gap-[88px]">
                <div className="w-[247px] text-center text-[#5D7285] text-2xl font-bold font-poppins">
                    {new Date().toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                </div>

                <div className="relative">
                    <Bell size={40} className="text-[#0C7FDA]" style={{strokeWidth: 2.5, fill: "#0C7FDA"}}/>
                    <div className="w-[13px] h-[13px] absolute right-0 top-0 bg-[#4ADB6A] rounded-full" />
                </div>

                <div className="w-[65px] h-[65px]">
                    <UserCircle size={65} className="text-[#333F49]" />
                </div>
            </div>
        </div>
    )
}

export default Header