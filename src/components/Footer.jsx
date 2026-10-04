import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle, Heart, Camera } from 'lucide-react';
import logo from '../assets/logo.jpg';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090a] border-t border-white/10 text-slate-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Studio M3 Logo" 
                className="w-12 h-12 rounded-full border border-slate-600 object-cover"
              />
              <div>
                <span className="text-xl font-bold tracking-widest text-white uppercase block font-serif">
                  Studio M3
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-light block">
                  Photography
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Capturing life's most precious moments with artistic elegance. Based in Pudukottai, Tamil Nadu. Specializing in Weddings, Events, Pre-Weddings & Portraits.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Photography Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>Wedding & Candid Photography</li>
              <li>House Warming Ceremonies</li>
              <li>Pre-Wedding & Engagement Shoots</li>
              <li>Traditional & Cultural Events</li>
              <li>Maternity & Baby Photography</li>
            </ul>
          </div>

          {/* Contact & Location Details */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-300 shrink-0 mt-0.5" />
                <span>Pudukottai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-300 shrink-0" />
                <a href="tel:9965343235" className="hover:text-white transition-colors">
                  +91 99653 43235
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon className="w-5 h-5 text-slate-300 shrink-0" />
                <a 
                  href="https://www.instagram.com/studiom3_designs/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @studiom3_designs
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-slate-300 shrink-0" />
                <a 
                  href="https://wa.me/919965343235" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Consultation
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Studio M3 Photography. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted with passion in Pudukottai <Heart className="w-3.5 h-3.5 text-red-500 inline fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}
