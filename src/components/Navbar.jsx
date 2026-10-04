import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Camera } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#0e1012]/90 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-600/50 group-hover:border-slate-300 transition-all duration-300 shadow-md">
              <img 
                src={logo} 
                alt="Studio M3 Photography Logo" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white uppercase block leading-none font-serif">
                Studio M3
              </span>
              <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase font-light block mt-1">
                Photography • Pudukottai
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-widest uppercase font-medium transition-colors duration-200 py-1 relative ${
                  isActive(link.path)
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-300 rounded-full animate-fade-in" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Call CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:9965343235"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 text-xs font-semibold uppercase tracking-wider shadow-lg"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 99653 43235</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#16191d] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium uppercase tracking-wider ${
                isActive(link.path)
                  ? 'bg-white/10 text-white font-bold'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="tel:9965343235"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-white text-black font-semibold text-sm uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              Call +91 99653 43235
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
