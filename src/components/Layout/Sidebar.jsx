import { Home, Map, Dam, BrainCircuit, Settings, TriangleAlert, LogOut } from "lucide-react"

export default function Sidebar({ isMinimized }) {
    return (
        <div className={`h-full p-8 bg-white shadow-2xl flex flex-col justify-between items-center transition-all duration-300 ease-in-out ${isMinimized ? 'w-[100px]' : 'w-[325px]'}`}>
            {/* Logo + Icons */}
            <div className="flex flex-col items-center gap-12 w-full">
                {/* Logo - Fixed size container */}
                <div className={`flex justify-center items-center ${isMinimized ? 'w-[48px]' : 'w-[102px]'} h-[45px] transition-all duration-300`}>
                    <img
                        className="w-[102px] h-[45px] object-contain"
                        src="/Stream_logo.svg"
                        alt="Logo"
                        style={{ transform: isMinimized ? 'scale(1.5)' : 'scale(1)', transformOrigin: 'center' }}
                    />
                </div>

                {/* Nav Items */}
                <div className="flex flex-col items-start gap-4 w-full">
                    {/* Active item (blue background) */}
                    <div className="p-2 bg-[#E9F5FE] rounded w-full flex items-center gap-3">
                        <Home size={32} className="text-[#0C7FDA] flex-shrink-0" />
                        <span className={`text-[#0C7FDA] font-semibold transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>Dashboard</span>
                        <div className={`ml-auto bg-white rounded px-2 py-1 transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>
                            <span className="text-[#0C7FDA] text-sm">1</span>
                        </div>
                    </div>

                    {/* Map item */}
                    <div className="p-2 rounded w-full flex items-center gap-3">
                        <Map size={32} className="text-[#5D7285] flex-shrink-0" />
                        <span className={`text-[#5D7285] font-semibold transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>Maps</span>
                    </div>

                    {/* River item */}
                    <div className="p-2 rounded w-full flex items-center gap-3">
                        <Dam size={32} className="text-[#5D7285] flex-shrink-0" />
                        <span className={`text-[#5D7285] transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>River</span>
                    </div>

                    {/* AI Analysis item */}
                    <div className="p-2 rounded w-full flex items-center gap-3">
                        <BrainCircuit size={32} className="text-[#5D7285] flex-shrink-0" />
                        <span className={`text-[#5D7285] transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>AI Analysis</span>
                    </div>

                    {/* Weather Alerts item */}
                    <div className="p-2 rounded w-full flex items-center gap-3 justify-between">
                        <div className="flex items-center gap-3">
                            <TriangleAlert size={32} className="text-[#5D7285] flex-shrink-0" />
                            <span className={`text-[#5D7285] transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>Weather Alerts</span>
                        </div>
                        <div className={`bg-[#E9F5FE] rounded px-2 py-1 transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>
                            <span className="text-[#1E252B] text-sm">1</span>
                        </div>
                    </div>

                    {/* Settings item */}
                    <div className="p-2 rounded w-full flex items-center gap-3">
                        <Settings size={32} className="text-[#5D7285] flex-shrink-0" />
                        <span className={`text-[#5D7285] transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>Settings</span>
                    </div>
                </div>
            </div>

            {/* Bottom Logout Button */}
            <div className="w-full mt-auto pt-6">
                <div className={`p-2 bg-[#667A8A] rounded flex items-center ${isMinimized ? 'justify-center' : 'gap-3'}`}>
                    <LogOut size={32} className="text-white flex-shrink-0" />
                    <span className={`text-white font-semibold transition-all duration-300 ${isMinimized ? 'hidden' : 'block'}`}>Logout</span>
                </div>
            </div>
        </div>
    )
}
