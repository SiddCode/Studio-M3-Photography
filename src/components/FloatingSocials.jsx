import React from 'react';
import { MessageCircle } from 'lucide-react';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function FloatingSocials() {
  const whatsappNumber = "919965343235";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Studio%20M3%20Photography,%20I%20would%20like%20to%20inquire%20about%20your%20photography%20services.`;
  const instagramUrl = "https://www.instagram.com/studiom3_designs/?hl=en";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end group">
      
      {/* Instagram Floating Icon */}
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Studio M3 Instagram Profile"
        className="flex items-center gap-2 p-3.5 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/insta border border-white/20"
      >
        <InstagramIcon className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover/insta:max-w-xs transition-all duration-300 text-xs font-semibold pr-1">
          Instagram
        </span>
      </a>

      {/* WhatsApp Floating Icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Studio M3"
        className="flex items-center gap-2 p-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/wa border border-white/20"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover/wa:max-w-xs transition-all duration-300 text-xs font-bold tracking-wide pr-1">
          WhatsApp Us
        </span>
      </a>

    </div>
  );
}
