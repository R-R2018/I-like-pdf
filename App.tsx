import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolSection from './components/ToolSection';
import Footer from './components/Footer';
import About from './components/About';
import ToolPage from './components/ToolPage';
import { TOOLS, TOOL_CATEGORIES } from './constants';
import { useNavigation } from './context/NavigationContext';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { page, selectedTool } = useNavigation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-800 transition-opacity duration-500 ease-in ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-red-100/50 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-[10%] right-[-10%] w-96 h-96 bg-blue-100/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-green-100/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {page === 'about' ? (
          <About />
        ) : selectedTool ? (
          <ToolPage />
        ) : (
          <>
            <Hero />
            <div className="space-y-16 mt-16">
              {TOOL_CATEGORIES.map(category => {
                const filteredTools = TOOLS.filter(tool => tool.category === category.id);
                if (filteredTools.length > 0) {
                  return <ToolSection key={category.id} title={category.title} tools={filteredTools} />;
                }
                return null;
              })}
            </div>
          </>
        )}
      </main>

      <Footer />
      
      <style>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default App;