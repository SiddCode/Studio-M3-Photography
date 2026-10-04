import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

export default function LightboxModal({ images, currentIndex, onClose, onNavigate }) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const currentImage = images[currentIndex];

  useEffect(() => {
    // Reset zoom when image changes
    setZoomLevel(1);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  if (!currentImage) return null;

  const handleNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 3));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  const resetZoom = () => setZoomLevel(1);

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
      
      {/* Top Action Bar */}
      <div className="flex items-center justify-between z-10 text-white border-b border-white/10 pb-4">
        <div>
          <h4 className="font-medium text-sm sm:text-base">{currentImage.title}</h4>
          <span className="text-xs text-slate-400 uppercase tracking-widest">
            {currentImage.category} • {currentIndex + 1} of {images.length}
          </span>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 backdrop-blur-md">
          <button 
            onClick={zoomOut} 
            disabled={zoomLevel <= 1}
            className="p-1 hover:text-white text-slate-300 disabled:opacity-40"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <span className="text-xs text-slate-300 font-mono min-w-[3.5rem] text-center">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button 
            onClick={zoomIn} 
            disabled={zoomLevel >= 3}
            className="p-1 hover:text-white text-slate-300 disabled:opacity-40"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          {zoomLevel > 1 && (
            <button 
              onClick={resetZoom} 
              className="p-1 hover:text-white text-slate-300 ml-1 border-l border-white/20 pl-2"
              title="Reset Zoom"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          title="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Display Area */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4">
        
        {/* Navigation Arrow Left */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-all shadow-xl"
          title="Previous Photo"
        >
          <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        {/* Image Container with Zoom */}
        <div className="max-w-full max-h-full flex items-center justify-center overflow-auto p-2">
          <img
            src={currentImage.url}
            alt={currentImage.title}
            style={{ transform: `scale(${zoomLevel})` }}
            className="max-h-[80vh] max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-300 ease-out select-none cursor-grab active:cursor-grabbing"
          />
        </div>

        {/* Navigation Arrow Right */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-white hover:text-black text-white transition-all shadow-xl"
          title="Next Photo"
        >
          <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
        </button>
      </div>

      {/* Footer / Caption */}
      <div className="text-center text-slate-400 text-xs sm:text-sm border-t border-white/10 pt-3">
        <p>{currentImage.description || "Studio M3 Photography • Pudukottai"}</p>
      </div>

    </div>
  );
}
