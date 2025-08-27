import { Home, Map, Dam, BrainCircuit, Settings, TriangleAlert, LogOut } from "lucide-react"

export default function Sidebar({ isMinimized }) {
    const baseItem =
        "flex items-center gap-3 rounded transition-colors duration-200 cursor-pointer"

    const hoverItem = "hover:bg-[#E9F5FE]"

    return (
        <div
            className={`h-full p-8 bg-white shadow-2xl flex flex-col justify-between items-center transition-all duration-300 ease-in-out ${isMinimized ? "w-[100px]" : "w-[325px]"
                }`}
        >
            {/* Logo */}
            <div className="flex flex-col items-center gap-12 w-full">
                <div
                    className={`flex justify-center items-center ${isMinimized ? "w-[48px]" : "w-[102px]"
                        } h-[45px] transition-all duration-300`}
                >
                    <img
                        className="w-[102px] h-[45px] object-contain"
                        src="/Stream_logo.svg"
                        alt="Logo"
                        style={{
                            transform: isMinimized ? "scale(1.5)" : "scale(1)",
                            transformOrigin: "center",
                        }}
                    />
                </div>

                {/* Nav Items */}
                <div className="flex flex-col items-start gap-4 w-full">
                    {/* Active item */}
                    <div
                        className={`${baseItem} ${isMinimized ? "justify-center p-2" : "w-full p-2"
                            } bg-[#E9F5FE]`}
                    >
                        <Home size={32} className="text-[#0C7FDA] flex-shrink-0" />
                        {!isMinimized && (
                            <>
                                <span className="text-[#0C7FDA] font-semibold">
                                    Dashboard
                                </span>
                                <div className="ml-auto bg-white rounded px-2 py-1">
                                    <span className="text-[#0C7FDA] text-sm">1</span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Map */}
                    <div
                        className={`${baseItem} ${hoverItem} ${isMinimized
                            ? "justify-center p-2"
                            : "w-full p-2"
                            }`}
                    >
                        <Map size={32} className="text-[#5D7285] flex-shrink-0" />
                        {!isMinimized && (
                            <span className="text-[#5D7285] font-semibold">Maps</span>
                        )}
                    </div>

                    {/* River */}
                    <div
                        className={`${baseItem} ${hoverItem} ${isMinimized
                            ? "justify-center p-2"
                            : "w-full p-2"
                            }`}
                    >
                        <Dam size={32} className="text-[#5D7285] flex-shrink-0" />
                        {!isMinimized && (
                            <span className="text-[#5D7285]">River</span>
                        )}
                    </div>

                    {/* AI Analysis */}
                    <div
                        className={`${baseItem} ${hoverItem} ${isMinimized
                            ? "justify-center p-2"
                            : "w-full p-2"
                            }`}
                    >
                        <BrainCircuit size={32} className="text-[#5D7285] flex-shrink-0" />
                        {!isMinimized && (
                            <span className="text-[#5D7285]">AI Analysis</span>
                        )}
                    </div>

                    {/* Weather Alerts */}
                    <div
                        className={`${baseItem} ${hoverItem} ${isMinimized
                            ? "justify-center p-2"
                            : "w-full p-2"
                            }`}
                    >
                        <TriangleAlert size={32} className="text-[#5D7285] flex-shrink-0" />
                        {!isMinimized && (
                            <>
                                <span className="text-[#5D7285]">Weather Alerts</span>
                                <div className="bg-[#E9F5FE] rounded px-2 py-1 ml-auto">
                                    <span className="text-[#1E252B] text-sm">1</span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Settings */}
                    <div
                        className={`${baseItem} ${hoverItem} ${isMinimized
                            ? "justify-center p-2"
                            : "w-full p-2"
                            }`}
                    >
                        <Settings size={32} className="text-[#5D7285] flex-shrink-0" />
                        {!isMinimized && (
                            <span className="text-[#5D7285]">Settings</span>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom Logout */}
            <div className="w-full mt-auto pt-6">
                <div
                    className={`${baseItem} p-2 bg-[#667A8A] text-white transition-colors duration-200 cursor-pointer ${isMinimized
                        ? "justify-center hover:bg-[#4E5E6A]"
                        : "w-full gap-3 hover:bg-[#4E5E6A]"
                        }`}
                >
                    <LogOut size={32} className="flex-shrink-0" />
                    {!isMinimized && (
                        <span className="font-semibold">Logout</span>
                    )}
                </div>
            </div>
        </div>
    )
}
