'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'day' | 'night';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDayMode: boolean; // Keep for backward compatibility
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('day');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    // Add no-transitions class to prevent flash
    document.documentElement.classList.add('no-transitions');
    
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'night' : 'day');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    
    // Remove no-transitions class after a brief delay
    setTimeout(() => {
      document.documentElement.classList.remove('no-transitions');
    }, 100);
    
    setMounted(true);
  }, []);

  // Update document when theme changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'day' ? 'night' : 'day'));
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ theme: 'day', toggleTheme, isDayMode: true }}>
        <div style={{ visibility: 'hidden' }}>{children}</div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDayMode: theme === 'day' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
