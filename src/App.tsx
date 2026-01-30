import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, ChevronRight, ChevronLeft, Sparkles, Star, Calendar, Music, MapPin, Quote, Home } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// --- Sub-components ---

// Floating Sparkles Component
const FloatingSparkles = ({ count = 15, color = "rose" }: { count?: number; color?: string }) => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
    {[...Array(count)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ 
          opacity: 0,
          x: Math.random() * 100 + '%',
          y: Math.random() * 100 + '%',
          scale: 0
        }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [Math.random() * 100 + '%', Math.random() * -20 + '%'],
          scale: [0, 1, 0.5, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 3 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: "easeInOut"
        }}
        className={`absolute text-${color}-300/40`}
      >
        <Sparkles size={12 + Math.random() * 20} />
      </motion.div>
    ))}
  </div>
);

// Navigation Bar Component
const NavigationBar = ({ 
  onNext, 
  onPrev, 
  onHome, 
  showNext = true 
}: { 
  onNext?: () => void; 
  onPrev?: () => void; 
  onHome: () => void; 
  showNext?: boolean 
}) => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
    {/* Back Button */}
    {onPrev && (
      <motion.button
        whileHover={{ scale: 1.05, x: -3 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrev}
        className="group px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm text-rose-600 border border-rose-200 shadow-lg shadow-rose-200/30 hover:bg-rose-50 hover:shadow-rose-300/40 transition-all flex items-center gap-2"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back</span>
      </motion.button>
    )}
    
    {/* Home Button */}
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onHome}
      className="p-4 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 text-white shadow-xl shadow-rose-300/50 hover:shadow-rose-400/60 hover:from-rose-600 hover:to-rose-700 transition-all border-2 border-white/30"
      aria-label="Home"
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        <Home size={24} />
      </motion.div>
    </motion.button>
    
    {/* Forward Button */}
    {showNext && onNext && (
      <motion.button
        whileHover={{ scale: 1.05, x: 3 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        className="group px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm text-rose-600 border border-rose-200 shadow-lg shadow-rose-200/30 hover:bg-rose-50 hover:shadow-rose-300/40 transition-all flex items-center gap-2"
      >
        <span className="font-medium">Forward</span>
        <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </motion.button>
    )}
  </div>
);

const HeartBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0, 
            scale: 0, 
            x: Math.random() * 100 + '%', 
            y: '110%' 
          }}
          animate={{ 
            opacity: [0, 0.5, 0], 
            scale: [0.5, 1, 0.8],
            y: '-10%',
            x: (Math.random() * 100) + (Math.random() * 10 - 5) + '%'
          }}
          transition={{ 
            duration: 10 + Math.random() * 10, 
            repeat: Infinity, 
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute text-pink-300/30"
        >
          <Heart size={24 + Math.random() * 40} fill="currentColor" />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-radial-gradient from-rose-50/20 via-transparent to-transparent opacity-60" />
    </div>
  );
};

const Page1_Cover = ({ onNext }: { onNext: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden"
  >
    <FloatingSparkles count={20} />
    
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative mb-8"
    >
      <motion.div 
        className="absolute inset-0 blur-3xl bg-rose-300/30 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Heart className="w-32 h-32 text-rose-500 relative z-10" fill="currentColor" />
      </motion.div>
    </motion.div>
    
    <motion.h1 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="text-5xl md:text-7xl font-serif text-rose-800 mb-4"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <motion.span
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Our Love Story
      </motion.span>
    </motion.h1>
    
    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="text-xl md:text-2xl text-rose-600/80 italic mb-12 max-w-lg"
    >
      "Every moment with you is a beautiful page in the book of my life."
    </motion.p>
    
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2 }}
      whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(244, 114, 182, 0.3)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      className="px-10 py-4 bg-rose-500 text-white rounded-full shadow-lg shadow-rose-200 flex items-center gap-2 text-lg font-medium hover:bg-rose-600 transition-colors z-20 mb-24"
    >
      Begin the Journey <Sparkles size={20} />
    </motion.button>
  </motion.div>
);

const Page2_Beginning = ({ onNext, onPrev, onHome }: { onNext: () => void; onPrev: () => void; onHome: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, x: 100 }} 
    animate={{ opacity: 1, x: 0 }} 
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.6 }}
    className="min-h-screen flex flex-col lg:flex-row items-center justify-center p-8 gap-12 pb-32"
  >
    <FloatingSparkles count={10} />
    
    <motion.div 
      className="w-full lg:w-1/2 relative"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <motion.div 
        className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1769050737841-da20a4a13e19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGxhdWdoaW5nfGVufDF8fHx8MTc2OTYwNzIzNnww" 
            alt="The Beginning"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      <motion.div 
        className="absolute -top-6 -left-6 w-24 h-24 bg-rose-100 rounded-full flex items-center justify-center text-rose-500 -rotate-12 shadow-lg z-20"
        animate={{ rotate: [-12, -8, -12], y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Calendar size={40} />
      </motion.div>
    </motion.div>
    
    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-rose-400 font-medium tracking-widest uppercase mb-4"
      >
        Chapter One
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-4xl md:text-5xl font-serif text-rose-900 mb-6"
      >
        How It All Started
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-lg text-rose-800/70 leading-relaxed mb-8"
      >
        Do you remember the day we first met? The world seemed to pause for just a second. 
        I never knew that a single conversation would lead to a lifetime of laughter and love. 
        From that first smile, I knew there was something magical about us.
      </motion.p>
    </div>
    
    <NavigationBar onNext={onNext} onPrev={onPrev} onHome={onHome} />
  </motion.div>
);

const Page3_Gallery = ({ onNext, onPrev, onHome }: { onNext: () => void; onPrev: () => void; onHome: () => void }) => {
  const photos = [
    "https://images.unsplash.com/photo-1766041675624-37dba05ca993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3YWxraW5nJTIwYmVhY2glMjBzdW5zZXR8ZW58MXx8fHwxNzY5NjE5MzI5fDA",
    "https://images.unsplash.com/photo-1612131971594-84cafc18c1fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBzdW5zZXQlMjBzaWxob3VldHRlc3xlbnwxfHx8fDE3Njk2MTkzMjl8MA",
    "https://images.unsplash.com/photo-1763739906957-418dafe284f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBwaWNuaWMlMjBwaWNuaWMlMjBwYXJrJTIwZ2FyZGVufGVufDF8fHx8MTc2OTYxOTMyOXww",
    "https://images.unsplash.com/photo-1763658731382-b291d501991e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBjaXR5JTIwbGlnaHRzJTIwbmlnaHQlMjBwYXJrfGVufDF8fHx8MTc2OTYxOTMyOXww",
    "https://images.unsplash.com/photo-1731936757627-f2a1ea5893e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBjb3p5JTIwZmlyZXBsYWNlJTIwd2ludGVyfGVufDF8fHx8MTc2OTYxOTMyOXww",
    "https://images.unsplash.com/photo-1758686254555-9bcaba0dd46d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBkYW5jaW5nJTIwaG9tZSUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzY5NjE5MzI5fDA",
    "https://images.unsplash.com/photo-1632736050121-6cce82f811b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBnb2xkZW4lMjBob3VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5NjE5MzMwfDA",
    "https://images.unsplash.com/photo-1766735327114-11dd5bc4aff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGdhcmRlbiUyMGZsb3dlcnMlMjBjb3VwbGV8ZW58MXx8fHwxNzY5NjE5MzMwfDA"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 px-6 max-w-7xl mx-auto pb-32"
    >
      <FloatingSparkles count={12} />
      
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-serif text-rose-900 mb-4">A Thousand Beautiful Words</h2>
        <p className="text-rose-600 italic">Pictures capture what words cannot express.</p>
      </motion.div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {photos.map((src, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="break-inside-avoid rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-4 border-white group relative"
          >
            <motion.div
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <ImageWithFallback src={src} alt={`Memory ${i}`} className="w-full hover:scale-110 transition-transform duration-700" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-white font-medium flex items-center gap-2"><Heart size={16} fill="white" /> Precious Moment</span>
            </div>
          </motion.div>
        ))}
      </div>

      <NavigationBar onNext={onNext} onPrev={onPrev} onHome={onHome} />
    </motion.div>
  );
};

const Page4_Timeline = ({ onNext, onPrev, onHome }: { onNext: () => void; onPrev: () => void; onHome: () => void }) => {
  const events = [
    { title: "First Trip Together", desc: "The weekend that changed everything.", icon: <MapPin />, img: "https://images.unsplash.com/photo-1504471969840-8661059bdbd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBoaWtpbmclMjBtb3VudGFpbiUyMHZpZXd8ZW58MXx8fHwxNzY5NjE5MzI5fDA" },
    { title: "Movie Nights", desc: "Countless hours of popcorn and cuddles.", icon: <Music />, img: "https://images.unsplash.com/photo-1758686254368-f74ae4ee660c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjB3YXRjaGluZyUyMG1vdmllJTIwcG9wY29ybiUyMGNvenl8ZW58MXx8fHwxNzY5NjE5MzI5fDA" },
    { title: "Cooking Adventures", desc: "Even the burnt dinners were perfect.", icon: <Sparkles />, img: "https://images.unsplash.com/photo-1758522489456-96afe24741dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBjb29raW5nJTIwa2l0Y2hlbiUyMHRvZ2V0aGVyfGVufDF8fHx8MTc2OTYxOTMyOXww" },
    { title: "Sunrise Walks", desc: "Starting the day together, hand in hand.", icon: <Star />, img: "https://images.unsplash.com/photo-1765438949754-04abbda13833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBob2xkaW5nJTIwaGFuZHMlMjB3YWxraW5nfGVufDF8fHx8MTc2OTYxOTMzMHww" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 px-6 bg-rose-50/50 pb-32"
    >
      <FloatingSparkles count={10} />
      
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-serif text-rose-900 text-center mb-16"
        >
          Milestones of Us
        </motion.h2>
        
        <div className="relative space-y-24">
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-px bg-rose-200 -translate-x-1/2 hidden md:block"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
          
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <motion.div 
                className="w-full md:w-1/2"
                whileHover={{ y: -5 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-video relative group">
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  >
                    <ImageWithFallback src={event.img} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </motion.div>
                  <motion.div 
                    className="absolute top-4 left-4 bg-white/90 p-2 rounded-full text-rose-500 shadow-md"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  >
                    {event.icon}
                  </motion.div>
                </div>
              </motion.div>
              
              <motion.div 
                className={`w-full md:w-1/2 text-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.2 }}
              >
                <h3 className="text-2xl font-serif text-rose-800 mb-2">{event.title}</h3>
                <p className="text-rose-600/80 italic">{event.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <NavigationBar onNext={onNext} onPrev={onPrev} onHome={onHome} />
      </div>
    </motion.div>
  );
};

const Page5_Quotes = ({ onNext, onPrev, onHome }: { onNext: () => void; onPrev: () => void; onHome: () => void }) => {
  const quotes = [
    { text: "Whatever our souls are made of, his and mine are the same.", author: "Emily Brontë" },
    { text: "I love you not only for what you are, but for what I am when I am with you.", author: "Elizabeth Barrett Browning" },
    { text: "In all the world, there is no heart for me like yours.", author: "Maya Angelou" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.1 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-rose-900 text-white relative overflow-hidden pb-32"
    >
      <FloatingSparkles count={15} color="pink" />
      
      <motion.div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <ImageWithFallback src="https://images.unsplash.com/photo-1544740685-102fd01d14e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBmb3JlaGVhZCUyMGtpc3MlMjByb21hbnRpY3xlbnwxfHx8fDE3Njk2MTkzMjl8MA" alt="bg" className="w-full h-full object-cover" />
      </motion.div>
      
      <div className="max-w-3xl w-full relative z-10 space-y-16">
        {quotes.map((q, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.3, duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
            >
              <Quote className="mx-auto mb-6 text-rose-300 opacity-50" size={40} />
            </motion.div>
            <motion.p 
              className="text-2xl md:text-3xl font-serif mb-4 leading-relaxed italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 + 0.2, duration: 1 }}
            >
              "{q.text}"
            </motion.p>
            <motion.span 
              className="text-rose-300 tracking-widest uppercase text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3 + 0.4, duration: 0.8 }}
            >
              — {q.author}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <NavigationBar onNext={onNext} onPrev={onPrev} onHome={onHome} />
    </motion.div>
  );
};

const Page6_Reasons = ({ onNext, onPrev, onHome }: { onNext: () => void; onPrev: () => void; onHome: () => void }) => {
  const reasons = [
    { icon: <Heart />, title: "Your Smile", desc: "It lights up my entire world" },
    { icon: <Sparkles />, title: "Your Laugh", desc: "The most beautiful sound I know" },
    { icon: <Star />, title: "Your Kindness", desc: "You make everyone around you better" },
    { icon: <Music />, title: "Your Voice", desc: "I could listen to you forever" },
    { icon: <Heart />, title: "Your Touch", desc: "It feels like home" },
    { icon: <Sparkles />, title: "Your Dreams", desc: "I love being part of your journey" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-rose-100 via-pink-50 to-rose-100 pb-32 relative overflow-hidden"
    >
      {/* Enhanced Background with Glow Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", x: Math.random() * 100 + "%", opacity: 0 }}
            animate={{ 
              y: "-10%",
              x: Math.random() * 100 + "%",
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10, 
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute text-rose-300/30"
          >
            <Heart size={20 + Math.random() * 30} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Floating Sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute pointer-events-none"
          initial={{ 
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
            opacity: 0
          }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="text-rose-400/40" size={12 + Math.random() * 16} />
        </motion.div>
      ))}
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-serif text-rose-900 mb-4"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Why I Love You
          </motion.h2>
          <motion.p 
            className="text-rose-600 italic text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A million reasons, and these are just a few...
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, type: "spring" }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl shadow-rose-200/50 border border-rose-100 hover:shadow-2xl hover:shadow-rose-300/60 transition-all"
            >
              {/* Animated Glow on Hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-rose-200/30 to-pink-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Pulsing Glow Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <motion.div
                  className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-radial from-rose-300/20 to-transparent -translate-x-1/2 -translate-y-1/2"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                />
              </div>

              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center text-white mb-6 mx-auto shadow-lg group-hover:shadow-rose-400/60 transition-shadow"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  animate={{ 
                    boxShadow: [
                      "0 10px 30px rgba(244, 114, 182, 0.3)",
                      "0 10px 40px rgba(244, 114, 182, 0.5)",
                      "0 10px 30px rgba(244, 114, 182, 0.3)"
                    ]
                  }}
                >
                  {React.cloneElement(reason.icon, { size: 28, fill: 'white' })}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl font-serif text-rose-900 mb-3 text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2 }}
                >
                  {reason.title}
                </motion.h3>
                
                <motion.p 
                  className="text-rose-700/80 text-center leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                >
                  {reason.desc}
                </motion.p>
              </div>

              {/* Floating Animation */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              />
            </motion.div>
          ))}
        </div>

        <NavigationBar onNext={onNext} onPrev={onPrev} onHome={onHome} />
      </div>
    </motion.div>
  );
};

const Page7_Note = ({ onPrev, onHome }: { onPrev: () => void; onHome: () => void }) => {
  const [showLove, setShowLove] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLove(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 text-white overflow-hidden relative"
    >
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/30 pointer-events-none" />
      
      {/* Light Flares */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -30, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Celebration Effects - Enhanced */}
      <AnimatePresence>
        {showLove && [...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100vh", x: Math.random() * 100 + "vw", scale: 0, opacity: 0 }}
            animate={{ 
              y: "-10vh", 
              rotate: 360, 
              scale: Math.random() * 2 + 0.5,
              opacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute pointer-events-none text-rose-200/30"
          >
            <Heart fill="currentColor" size={20 + Math.random() * 24} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Sparkles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute pointer-events-none"
          initial={{ 
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: 0,
            opacity: 0
          }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="text-white/50" size={8 + Math.random() * 16} />
        </motion.div>
      ))}

      <motion.div 
        className="max-w-2xl w-full bg-white/10 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white/20 shadow-2xl relative z-10 text-center"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Glowing Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/20 via-transparent to-white/20"
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, delay: 0.5 }}
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-rose-600 mx-auto mb-8 shadow-xl relative z-10"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <Sparkles size={40} />
          </motion.div>
        </motion.div>

        <motion.h2 
          className="text-4xl md:text-5xl font-serif mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          My Dearest Love,
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl leading-relaxed mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Every day with you is a gift I never knew I deserved. You are my best friend, 
          my home, and my greatest adventure. Thank you for choosing me, for loving me, 
          and for making every moment sparkle.
        </motion.p>
        
        <motion.p 
          className="text-2xl md:text-3xl font-serif italic mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          I love you more than words could ever say.
        </motion.p>

        <motion.div 
          className="flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              textShadow: [
                "0 0 10px rgba(255,255,255,0.3)",
                "0 0 20px rgba(255,255,255,0.5)",
                "0 0 10px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white flex items-center gap-2 text-xl font-serif"
          >
            Forever & Always <Heart fill="white" size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
      
      <NavigationBar onPrev={onPrev} onHome={onHome} showNext={false} />
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 text-center opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5 }}
      >
        <p className="text-xs tracking-[0.5em] uppercase">Happy Valentine's Day 2026</p>
      </motion.div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, 7));
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const goHome = () => setCurrentPage(1);

  return (
    <div className="min-h-screen bg-rose-50 text-rose-950 selection:bg-rose-200 selection:text-rose-900 font-sans overflow-x-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
      `}} />
      <HeartBackground />
      
      {/* Progress Indicator */}
      <div className="fixed top-8 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {[1, 2, 3, 4, 5, 6, 7].map((p) => (
          <motion.div 
            key={p} 
            className={`h-1.5 transition-all duration-500 rounded-full ${ 
              p === currentPage ? 'w-8 bg-rose-500' : 'w-4 bg-rose-200'
            }`}
            animate={p === currentPage ? { 
              boxShadow: [
                "0 0 5px rgba(244, 63, 94, 0.3)",
                "0 0 15px rgba(244, 63, 94, 0.6)",
                "0 0 5px rgba(244, 63, 94, 0.3)"
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {currentPage === 1 && <Page1_Cover key="p1" onNext={nextPage} />}
        {currentPage === 2 && <Page2_Beginning key="p2" onNext={nextPage} onPrev={prevPage} onHome={goHome} />}
        {currentPage === 3 && <Page3_Gallery key="p3" onNext={nextPage} onPrev={prevPage} onHome={goHome} />}
        {currentPage === 4 && <Page4_Timeline key="p4" onNext={nextPage} onPrev={prevPage} onHome={goHome} />}
        {currentPage === 5 && <Page5_Quotes key="p5" onNext={nextPage} onPrev={prevPage} onHome={goHome} />}
        {currentPage === 6 && <Page6_Reasons key="p6" onNext={nextPage} onPrev={prevPage} onHome={goHome} />}
        {currentPage === 7 && <Page7_Note key="p7" onPrev={prevPage} onHome={goHome} />}
      </AnimatePresence>

      {/* Background Ambience - Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <motion.div 
          className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-200/20 blur-3xl rounded-full"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-pink-200/20 blur-3xl rounded-full"
          animate={{ 
            x: [0, -50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
