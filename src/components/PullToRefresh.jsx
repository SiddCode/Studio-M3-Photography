import React, { useState, useEffect } from 'react';
import { RefreshCw, Camera } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function PullToRefresh({ children }) {
  const [startY, setStartY] = useState(0);
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const PULL_THRESHOLD = 90;

  useEffect(() => {
    const handleTouchStart = (e) => {
      if (window.scrollY === 0) {
        setStartY(e.touches[0].clientY);
      }
    };

    const handleTouchMove = (e) => {
      if (window.scrollY === 0 && startY > 0) {
        const currentY = e.touches[0].clientY;
        const distance = currentY - startY;
        if (distance > 0) {
          setPullDistance(Math.min(distance * 0.45, PULL_THRESHOLD + 20));
        }
      }
    };

    const handleTouchEnd = () => {
      if (pullDistance >= PULL_THRESHOLD && !isRefreshing) {
        triggerRefresh();
      } else {
        setPullDistance(0);
      }
      setStartY(0);
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [startY, pullDistance, isRefreshing]);

  const triggerRefresh = () => {
    setIsRefreshing(true);
    setPullDistance(PULL_THRESHOLD);

    setTimeout(() => {
      setIsRefreshing(false);
      setPullDistance(0);
      // Optional subtle reload or state refresh
    }, 1500);
  };

  return (
    <div className="relative">
      
      {/* Pull To Refresh Animation Header Indicator */}
      <div 
        className="fixed top-20 left-0 right-0 z-40 flex items-center justify-center pointer-events-none transition-all duration-300"
        style={{
          transform: `translateY(${pullDistance - 50}px)`,
          opacity: pullDistance > 10 ? 1 : 0
        }}
      >
        <div className="bg-[#16191d]/95 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3 text-white">
          <div className="relative flex items-center justify-center">
            <img 
              src={logo} 
              alt="Refreshing Studio M3" 
              className={`w-6 h-6 rounded-full border border-slate-500 ${isRefreshing ? 'animate-spin' : ''}`} 
            />
            {isRefreshing && (
              <RefreshCw className="w-8 h-8 text-slate-200 animate-spin absolute -inset-1" />
            )}
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-200">
            {isRefreshing ? 'Refreshing Studio M3...' : pullDistance >= PULL_THRESHOLD ? 'Release to Refresh' : 'Swipe Down to Refresh'}
          </span>
        </div>
      </div>

      {children}
    </div>
  );
}
