import React, { useState } from 'react';
import { ZoomIn, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import LightboxModal from '../components/LightboxModal';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryImages = [
    {
      id: 1,
      title: "Royal South Indian Wedding Ritual",
      category: "Wedding",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
      description: "Candid emotional moments captured during the Muhurtham ceremony in Pudukottai."
    },
    {
      id: 2,
      title: "Griha Pravesham Traditional Pooja",
      category: "House Warming",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      description: "Warm auspicious vibes as the family steps into their dream new home."
    },
    {
      id: 3,
      title: "Romantic Sunset Pre-Wedding",
      category: "Pre-Wedding",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      description: "Dramatic golden hour portrait photoshoot with cinematic lighting."
    },
    {
      id: 4,
      title: "First Birthday Celebration",
      category: "Birthday & Baby",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
      description: "Adorable smiles and joyful moments framed with soft pastel studio colors."
    },
    {
      id: 5,
      title: "Bride's Elegant Portrait",
      category: "Wedding",
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200",
      description: "Detail shots highlighting traditional bridal jewelry and authentic smile."
    },
    {
      id: 6,
      title: "New Home Entrance & Floral Decor",
      category: "House Warming",
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
      description: "Vibrant traditional kolam and floral decorations at the entrance."
    },
    {
      id: 7,
      title: "Traditional Festival Ceremony",
      category: "Traditional",
      url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&q=80&w=1200",
      description: "Cultural rituals captured with vivid color depth and clarity."
    },
    {
      id: 8,
      title: "Outdoor Pre-Wedding Story",
      category: "Pre-Wedding",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=1200",
      description: "Lush green natural backdrop creating timeless couple portraiture."
    },
    {
      id: 9,
      title: "Heartfelt Groom Moments",
      category: "Wedding",
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
      description: "Natural candid laughter shared between groom and close friends."
    },
    {
      id: 10,
      title: "Little Explorer Baby Shoot",
      category: "Birthday & Baby",
      url: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1200",
      description: "Charming newborn portraits crafted with supreme care and warmth."
    },
    {
      id: 11,
      title: "Family Blessing Ritual",
      category: "Traditional",
      url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200",
      description: "Warm family togetherness captured during auspicious family gathering."
    },
    {
      id: 12,
      title: "House Warming Evening Illumination",
      category: "House Warming",
      url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=1200",
      description: "Stunning architectural lighting and welcoming atmosphere."
    }
  ];

  const categories = ['All', 'Wedding', 'House Warming', 'Pre-Wedding', 'Birthday & Baby', 'Traditional'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="bg-[#0e1012] text-white min-h-screen py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-slate-300" />
            <span>Studio M3 Portfolio</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold font-serif text-white">
            Photo Gallery
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Explore our featured photography work covering Weddings, House Warming ceremonies, Pre-Wedding sessions, and Events across Pudukottai. Click any image to open full-screen swipe & zoom viewer.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-white text-black shadow-lg scale-105'
                  : 'bg-[#16191d] text-slate-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Photography Grid - ALL SLIDE IN FROM LEFT SIDE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.7, delay: (idx % 3) * 0.15 }}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#16191d] border border-white/10 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1 hover:border-slate-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold mb-1">
                  {image.category}
                </span>
                <h3 className="text-lg font-bold font-serif text-white">
                  {image.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                  {image.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-xs text-white font-semibold uppercase tracking-wider">
                  <ZoomIn className="w-4 h-4 text-slate-300" />
                  <span>Click to Zoom & View</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIndex) => setLightboxIndex(newIndex)}
        />
      )}

    </div>
  );
}
