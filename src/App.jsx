import React, { useState } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Header from './components/Layout/Header'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  const [isMinimized, setIsMinimized] = useState(true)

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div className="min-h-screen bg-[#F5F6F8]">
      <div className="flex h-screen">
        {/* Sidebar - dynamic width */}
        <div className={`transition-all z-0 duration-300 ease-in-out ${isMinimized ? 'w-[100px]' : 'w-[325px]'} flex-shrink-0`}>
          <Sidebar isMinimized={isMinimized} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Header isMinimized={isMinimized} toggleSidebar={toggleSidebar} />
          <main className="flex-1 overflow-auto p-0 w-full">
            <Dashboard />
          </main>
        </div>
      </div>
    </div>
  )
}

export default App