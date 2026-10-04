import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'Pudukottai',
    eventType: 'Wedding Photography',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#0e1012] text-white min-h-screen py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white">
            Contact Studio M3
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Have an upcoming wedding, house warming, or special occasion in Pudukottai? Let's discuss how we can bring your photography vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards - Slide from Left */}
          <motion.div
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            
            {/* Studio Info Card */}
            <div className="p-8 rounded-2xl bg-[#16191d] border border-white/10 space-y-6 shadow-xl">
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <img 
                  src={logo} 
                  alt="Studio M3 Logo" 
                  className="w-16 h-16 rounded-full border-2 border-slate-500 object-cover" 
                />
                <div>
                  <h3 className="text-xl font-bold font-serif text-white">Studio M3 Photography</h3>
                  <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Pudukottai, Tamil Nadu</p>
                </div>
              </div>

              <div className="space-y-5 text-slate-300">
                
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Location</h4>
                    <p className="text-sm text-white mt-0.5">Pudukottai Town, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Phone & Call Inquiry</h4>
                    <a href="tel:9965343235" className="text-sm font-semibold text-white hover:underline mt-0.5 block">
                      +91 99653 43235
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">WhatsApp Chat</h4>
                    <a
                      href="https://wa.me/919965343235"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-[#25D366] hover:underline mt-0.5 block"
                    >
                      +91 99653 43235 (Click to Chat)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Instagram Handle</h4>
                    <a
                      href="https://www.instagram.com/studiom3_designs/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:underline mt-0.5 block"
                    >
                      @studiom3_designs
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-2">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Working Hours</h4>
                    <p className="text-sm text-white mt-0.5">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Right Column: Contact Form - Slide from Right */}
          <motion.div
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-[#16191d] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl"
          >
            
            {isSubmitted ? (
              <div className="text-center py-16 space-y-4 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
                <h3 className="text-2xl font-bold font-serif text-white">Thank You, {formData.name}!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Your inquiry details have been received. Studio M3 Pudukottai will get back to you shortly at <span className="text-white font-semibold">{formData.phone}</span>.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-widest font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <h3 className="text-2xl font-bold font-serif text-white mb-2">Book Your Session</h3>
                  <p className="text-xs text-slate-400">Fill out your details below to check package pricing & date availability.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sidd"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1012] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 text-sm transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sidd@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1012] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1012] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 text-sm transition-colors"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                      Event Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Pudukottai, Trichy"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1012] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Event Type / Service Required
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1012] border border-white/10 text-white focus:outline-none focus:border-slate-400 text-sm transition-colors"
                  >
                    <option value="Wedding Photography">Wedding & Reception Photography</option>
                    <option value="House Warming">House Warming (Griha Pravesham)</option>
                    <option value="Pre-Wedding Shoot">Pre-Wedding & Outdoor Shoot</option>
                    <option value="Birthday & Baby Shoot">Birthday & Baby Shoot</option>
                    <option value="Traditional Event">Traditional Ceremony</option>
                    <option value="Other Photography">Other Photography Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">
                    Your Message / Special Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event date, venue details, or any specific preferences..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1012] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-slate-400 text-sm transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Inquiry Details
                </button>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </div>
  );
}
