import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  PhoneCall, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  Award, 
  ArrowRight,
  Layers
} from 'lucide-react';

export default function NavbarAndHero() {
  const [isOpen, setIsOpen] = useState(false);
  const handleWhatsAppClick = () => {
    const phoneNumber = "6260885256";
    const message = "Hello, I want to inquire about plywood products and pricing.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* ================= TOP BAR (Contact & Info) ================= */}
      <div className="bg-amber-900 text-amber-100 text-xs sm:text-sm py-2 px-4 sm:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span>📍 Maharastra thane balkum</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">🕒 Mon - Sat: 9:00 AM - 8:00 PM</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="tel:+919876543210" className="flex items-center hover:text-white transition">
            <PhoneCall className="w-3.5 h-3.5 mr-1" /> +91 6260885256
          </a>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="bg-amber-800 p-2 rounded-lg text-white">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-wide text-amber-900 block leading-tight">
                Vishwakarma Rambadai
              </span>
              <span className="text-xs font-semibold text-amber-600 tracking-wider uppercase">
                Plywood & Furniture
              </span>
            </div>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-slate-600">
            <a href="#home" className="hover:text-amber-800 transition">Home</a>
            <a href="#products" className="hover:text-amber-800 transition">Products</a>
            <a href="#about" className="hover:text-amber-800 transition">About Us</a>
            <a href="#features" className="hover:text-amber-800 transition">Why Us</a>
            <a href="#contact" className="hover:text-amber-800 transition">Contact</a>
          </div>

          {/* Action Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-medium flex items-center space-x-2 shadow-sm transition transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Chat</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-amber-800 focus:outline-none p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-5 space-y-3 shadow-lg">
            <a 
              href="#home" 
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-amber-50 font-medium text-slate-700"
            >
              Home
            </a>
            <a 
              href="#products" 
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-amber-50 font-medium text-slate-700"
            >
              Products
            </a>
            <a 
              href="#about" 
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-amber-50 font-medium text-slate-700"
            >
              About Us
            </a>
            <a 
              href="#features" 
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-amber-50 font-medium text-slate-700"
            >
              Why Us
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="block py-2 px-3 rounded-lg hover:bg-amber-50 font-medium text-slate-700"
            >
              Contact
            </a>
            <div className="pt-2">
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-medium flex items-center justify-center space-x-2 shadow"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section id="home" className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-amber-800 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Overlay Pattern/Glow */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block bg-amber-800/80 text-amber-200 border border-amber-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              ✨ Premium Quality Plywood & Hardware
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Strong Foundation for Your <span className="text-amber-400">Dream Spaces</span>
            </h1>
            
            <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Discover 100% boiling waterproof (BWR) plywood, commercial grade plywood, flush doors, and designer laminates built for lifelong durability.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#products" 
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-amber-950 font-bold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 transition transform hover:-translate-y-0.5"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <button 
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-sm flex items-center justify-center space-x-2 transition"
              >
                <MessageCircle className="w-5 h-5 text-emerald-400" />
                <span>Get Wholesale Quote</span>
              </button>
            </div>

            {/* Quick Trust Badges under buttons */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-amber-800/60 max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>IS:710 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Best Price Guarantee</span>
              </div>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
                <Truck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Fast Transport</span>
              </div>
            </div>

          </div>

          {/* Right Image / Graphic Showcase Card */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-tr from-amber-900 to-amber-700 p-3 rounded-3xl shadow-2xl border-4 border-amber-600/30">
              <div className="bg-slate-900 rounded-2xl p-6 text-center space-y-4 overflow-hidden relative">
                {/* Decorative badge inside card */}
                <div className="absolute top-3 right-3 bg-amber-500 text-amber-950 text-xs font-bold px-2.5 py-1 rounded-md">
                  TOP QUALITY
                </div>
                
                <div className="h-56 bg-amber-950/60 rounded-xl flex flex-col items-center justify-center border border-amber-800/50 p-6">
                  <Layers className="w-20 h-20 text-amber-500 mb-3 animate-pulse" />
                  <h3 className="text-xl font-bold text-white">Marine & BWR Plywood</h3>
                  <p className="text-xs text-slate-400 mt-1">Available in 6mm, 12mm, 16mm & 19mm thickness</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="bg-amber-900/40 p-3 rounded-lg border border-amber-800/40">
                    <span className="block text-xs text-amber-300 font-semibold">Termite Proof</span>
                    <span className="text-sm font-bold text-white">100% Protected</span>
                  </div>
                  <div className="bg-amber-900/40 p-3 rounded-lg border border-amber-800/40">
                    <span className="block text-xs text-amber-300 font-semibold">Warranty</span>
                    <span className="text-sm font-bold text-white">Up to 21 Years</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FLOATING WHATSAPP BUTTON ================= */}
      <button 
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110 animate-bounce"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

    </div>
  );
}