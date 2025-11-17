import React, { useState } from 'react';
import AdPlaceholder from './AdPlaceholder';
import { useNavigation } from '../context/NavigationContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setPage, setSelectedTool } = useNavigation();

  const navLinks = ['Convert', 'Organize', 'Edit', 'Optimize', 'Security'];
  
  const handleNavigateHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSelectedTool(null);
    setPage('home');
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionTitle: string) => {
    e.preventDefault();
    if(isMenuOpen) setIsMenuOpen(false);

    setSelectedTool(null);
    setPage('home');

    setTimeout(() => {
        const headers = Array.from(document.querySelectorAll('h2'));
        const targetHeader = headers.find(h => h.textContent?.toLowerCase().includes(sectionTitle.toLowerCase()));
        
        if (targetHeader && targetHeader.parentElement) {
            const section = targetHeader.parentElement;
            const headerOffset = 80;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    }, 50);
  };


  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <AdPlaceholder className="w-full text-center py-1 bg-gray-200 text-xs text-gray-500" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" onClick={handleNavigateHome} className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-2xl font-bold text-gray-800">
                I like pdf
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link} href="#" onClick={(e) => scrollToSection(e, link)} className="text-gray-600 hover:text-red-600 transition-colors duration-200">{link}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-red-600 transition-colors duration-200">Login</a>
            <a href="#" className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 text-sm font-medium">Sign Up</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <a key={link} href="#" onClick={(e) => scrollToSection(e, link)} className="text-gray-600 hover:bg-gray-100 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200">{link}</a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-600 hover:bg-gray-100">Login</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-red-600 hover:bg-gray-100">Sign Up</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;