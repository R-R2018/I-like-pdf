import React from 'react';
import AdPlaceholder from './AdPlaceholder';
import { useNavigation } from '../context/NavigationContext';

const Footer: React.FC = () => {
  const { setPage, setSelectedTool } = useNavigation();
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'about') => {
      e.preventDefault();
      setSelectedTool(null);
      setPage(page);
      window.scrollTo(0, 0);
  }

  return (
    <footer className="bg-gray-100 border-t mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Solutions</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Convert</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Organize</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Optimize</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" onClick={(e) => handleNavClick(e, 'about')} className="text-base text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms</a></li>
            </ul>
          </div>
          <AdPlaceholder className="h-full w-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 col-span-2 md:col-span-1" />
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-base text-gray-500">&copy; {new Date().getFullYear()} I like pdf, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            {/* Social media icons would go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;