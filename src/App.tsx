import React from 'react'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Velkommen til din React App! 🚀
            </h1>
            <p className="text-gray-600 mb-4">
              Dette er en grundlæggende React-applikation bygget med Vite og Tailwind CSS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-blue-800 mb-3">
                  Funktioner
                </h2>
                <ul className="text-blue-700 space-y-2">
                  <li>• React 18 med TypeScript</li>
                  <li>• Tailwind CSS til styling</li>
                  <li>• Vite til hurtig udvikling</li>
                  <li>• Responsivt design</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-green-800 mb-3">
                  Kom i gang
                </h2>
                <p className="text-green-700">
                  Applikationen kører nu! Du kan begynde at redigere komponenterne 
                  og se ændringerne live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App