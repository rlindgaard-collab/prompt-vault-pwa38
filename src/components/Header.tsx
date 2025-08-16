import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">
              Min React App
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Hjem
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Om
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Kontakt
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header