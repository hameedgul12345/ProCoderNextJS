// components/Layout.js
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:bg-gray-900/95 dark:border-gray-700">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
                YourLogo
              </h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 relative group">
                  <span className="relative z-10">Home</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-md opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 relative group">
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-md opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
                <a href="/services" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 relative group">
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-md opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 relative group">
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-md opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
                <a href="/portfolio" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 relative group">
                  <span className="relative z-10">Portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-amber-500 rounded-md opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300">
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <a href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                Home
              </a>
              <a href="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                About
              </a>
              <a href="/services" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                Services
              </a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                Contact Us
              </a>
              <a href="/portfolio" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                Portfolio
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      
      <footer className="bg-gray-900 text-white text-center py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400">&copy; 2024 YourLogo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}