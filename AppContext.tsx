
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteData } from './types';
import { INITIAL_SITE_DATA } from './constants';

interface AppContextType {
  siteData: SiteData;
  updateSiteData: (newData: Partial<SiteData>) => void;
  resetToDefault: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteData>(() => {
    const saved = localStorage.getItem('death_ave_wines_data');
    return saved ? JSON.parse(saved) : INITIAL_SITE_DATA;
  });

  useEffect(() => {
    localStorage.setItem('death_ave_wines_data', JSON.stringify(siteData));
  }, [siteData]);

  const updateSiteData = (newData: Partial<SiteData>) => {
    setSiteData(prev => ({ ...prev, ...newData }));
  };

  const resetToDefault = () => {
    if (window.confirm("Reset all content to defaults? This cannot be undone.")) {
      setSiteData(INITIAL_SITE_DATA);
    }
  };

  return (
    <AppContext.Provider value={{ siteData, updateSiteData, resetToDefault }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
