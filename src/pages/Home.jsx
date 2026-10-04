import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import { Camera, Award, Clock, Users, ArrowRight, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  const heroSlides = [
    {
      id: 1,
      title: "Royal Wedding Stories",
      subtitle: "Eternalizing romance with candid elegance in Pudukottai",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1920",
      tag: "Wedding Photography"
    },
    {
      id: 2,
      title: "Warm House Warming Ceremonies",
      subtitle: "Capturing traditional rituals & family joy in every corner",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
      tag: "Griha Pravesham"
    },
    {
      id: 3,
      title: "Cinematic Pre-Wedding Shoots",
      subtitle: "Dramatic portraits & unforgettable outdoor moments",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1920",
      tag: "Pre-Wedding"
    },
    {
      id: 4,
      title: "Precious Family & Baby Memories",
      subtitle: "Soft, heartfelt expressions captured forever",
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1920",
      tag: "Portraiture"
    }
  ];

  const features = [
    {
      icon: <Camera className="w-8 h-8 text-slate-200" />,
      title: "High-End Cinema Gear",
      desc: "We use top-tier full-frame cameras and prime portrait lenses for unmatched clarity and color grading."
    },
    {
      icon: <Award className="w-8 h-8 text-slate-200" />,
      title: "Artistic Storytelling",
      desc: "Beyond posed photos, we specialize in candid moments that preserve raw emotions and genuine smiles."
    },
    {
      icon: <Clock className="w-8 h-8 text-slate-200" />,
      title: "Punctual & Dedicated",
      desc: "Seamless planning from pre-event discussions to timely delivery of high-res photo albums."
    },
    {
      icon: <Users className="w-8 h-8 text-slate-200" />,
      title: "Client-First Approach",
      desc: "Personalized photography packages tailored specifically to your event budget and vision."
    }
  ];

  const highlights = [
    { number: "500+", label: "Events Covered" },
    { number: "100%", label: "Pudukottai Loved" },
    { number: "8+", label: "Years Experience" },
    { number: "4.9★", label: "Client Rating" },
  ];

  return (
    <div className="bg-[#0e1012] text-white overflow-hidden">

      {/* Hero Section with Clean Text (No Card Background) */}
      <section className="relative h-[85vh] sm:h-[90vh] w-full overflow-hidden bg-[#0e1012]">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={1000}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className="h-full w-full hero-swiper"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative overflow-hidden bg-[#0e1012]">
              {({ isActive }) => (
                <>
                  {/* Background Image with Zoom */}
                  <div className="w-full h-full overflow-hidden relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-10000 ease-out"
                    />
                    {/* Dark gradient overlay for readability without box card */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1012] via-black/45 to-black/60" />
                  </div>

                  {/* Clean Text Overlay - Direct on Image */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4 sm:px-6">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="max-w-4xl space-y-6"
                    >
                      <span className="inline-block px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs uppercase tracking-[0.3em] font-semibold text-slate-200 shadow-md">
                        {slide.tag}
                      </span>

                      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif tracking-wide leading-tight text-white drop-shadow-2xl">
                        {slide.title}
                      </h1>

                      <p className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl mx-auto drop-shadow-lg">
                        {slide.subtitle}
                      </p>

                      <div className="pt-4 flex flex-wrap justify-center gap-4">
                        <Link
                          to="/gallery"
                          className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-slate-200 font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-2xl flex items-center gap-2 hover:scale-105"
                        >
                          Explore Gallery <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                          to="/contact"
                          className="px-8 py-3.5 rounded-full bg-black/40 hover:bg-white/20 text-white border border-white/30 font-semibold text-xs uppercase tracking-widest transition-all duration-300 backdrop-blur-md hover:scale-105"
                        >
                          Book Your Date
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stats Ribbon */}
      <motion.section 
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="bg-[#16191d] border-y border-white/10 py-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {highlights.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-wider">
                  {item.number}
                </h3>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* About Image - Slide from Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-slate-700 to-slate-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden bg-[#16191d] border border-white/10 p-4">
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200"
                alt="Studio M3 Photographer in Action"
                className="w-full h-[420px] object-cover rounded-xl"
              />
              <div className="absolute bottom-8 left-8 bg-[#0e1012]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 max-w-xs shadow-2xl">
                <img src={logo} alt="Studio M3" className="w-12 h-12 rounded-full border border-slate-500" />
                <div>
                  <h4 className="font-bold text-white text-sm font-serif">Studio M3 Pudukottai</h4>
                  <p className="text-xs text-slate-400">Premier Photography Studio</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text Content - Slide from Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-[0.25em]">
              <Sparkles className="w-4 h-4 text-slate-300" />
              <span>About Studio M3</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold font-serif leading-tight text-white">
              We Don't Just Take Photos, We Frame Emotions.
            </h2>

            <p className="text-slate-300 leading-relaxed font-light text-base sm:text-lg">
              Located in the heart of <span className="text-white font-medium">Pudukottai</span>, 
              <strong className="text-white font-semibold"> Studio M3 Photography</strong> is dedicated to capturing life's finest milestones. From lavish wedding celebrations and heartfelt house warming ceremonies to intimate portraits and pre-wedding shoots, we transform fleeting moments into timeless heirlooms.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              Our aesthetic blends classic traditional photography with modern candid cinematography. We pay meticulous attention to natural lighting, authentic expressions, and artistic framing to deliver memories you will cherish forever.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                <span>Based in Pudukottai & available for travel across Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                <span>Specialized in Weddings, House Warming, Pre-Weddings & Portraits</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <CheckCircle className="w-5 h-5 text-slate-400 shrink-0" />
                <span>Premium album printing & ultra HD digital deliverables</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all shadow-lg"
              >
                Connect With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>

        </div>
      </section>

      {/* Why Studio M3 Section */}
      <section className="py-20 bg-[#16191d] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto space-y-4 mb-16"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Why Choose Studio M3
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white">
              Crafting Perfection in Every Frame
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              We bring technical precision, creative vision, and genuine dedication to every photoshoot in Pudukottai and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="p-8 rounded-2xl bg-[#0e1012] border border-white/10 hover:border-slate-500 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div className="mb-6 p-3 rounded-xl bg-white/5 inline-block group-hover:bg-white/10 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold font-serif text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Recent Moments We Captured - ALL SLIDE IN FROM LEFT SIDE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 block mb-2">
              Portfolio Teaser
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              Recent Moments We Captured
            </h2>
          </div>
          <Link
            to="/gallery"
            className="text-sm font-semibold uppercase tracking-widest text-slate-300 hover:text-white flex items-center gap-2 group border-b border-white/20 pb-1"
          >
            View Full Gallery <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Grand South Indian Wedding",
              category: "Wedding",
              image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Traditional House Warming Pooja",
              category: "House Warming",
              image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
            },
            {
              title: "Pre-Wedding Sunset Magic",
              category: "Pre-Wedding",
              image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: idx * 0.18 }}
            >
              <Link
                to="/gallery"
                className="group relative overflow-hidden rounded-2xl bg-[#16191d] border border-white/10 h-80 block shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold font-serif text-white">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <motion.section
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="py-20 bg-gradient-to-r from-[#16191d] via-[#1f242b] to-[#16191d] border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center px-4 space-y-6">
          <MapPin className="w-8 h-8 text-slate-300 mx-auto" />
          <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white">
            Planning an Event in Pudukottai?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light max-w-2xl mx-auto">
            Let Studio M3 Photography preserve your memories in stunning detail. Contact us today for session availability and customized packages.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all shadow-xl"
            >
              Contact Studio M3
            </Link>
            <a
              href="https://wa.me/919965343235"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#25D366] text-white font-semibold text-xs uppercase tracking-widest hover:bg-[#20ba59] transition-all shadow-xl flex items-center gap-2"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
