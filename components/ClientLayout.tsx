'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show for minimum 800ms OR until page is ready, whichever is longer (max 1.2s)
    const minLoadTime = 800;
    const maxLoadTime = 1200;
    const startTime = Date.now();
    let loadTimer: NodeJS.Timeout | null = null;

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);
      
      // Ensure we don't exceed max time
      const timeout = Math.min(remaining, maxLoadTime - elapsed);
      
      if (timeout > 0) {
        loadTimer = setTimeout(() => {
          setIsLoading(false);
        }, timeout);
      } else {
        setIsLoading(false);
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback: hide after max time regardless
    const maxTimer = setTimeout(() => {
      setIsLoading(false);
    }, maxLoadTime);

    return () => {
      clearTimeout(maxTimer);
      if (loadTimer) clearTimeout(loadTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {children}
      </div>
    </>
  );
}

