import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Tool } from '../types';

type Page = 'home' | 'about';

interface NavigationContextType {
  page: Page;
  setPage: (page: Page) => void;
  selectedTool: Tool | null;
  setSelectedTool: (tool: Tool | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [page, setPage] = useState<Page>('home');
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

  const handleSetPage = (newPage: Page) => {
    if (page !== newPage) {
      setSelectedTool(null); // Deselect tool when changing main page
      setPage(newPage);
    }
  };

  return (
    <NavigationContext.Provider value={{ page, setPage: handleSetPage, selectedTool, setSelectedTool }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
