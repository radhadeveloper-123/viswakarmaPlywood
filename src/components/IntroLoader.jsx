import React, { useEffect, useState } from 'react';

export default function IntroLoader({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 2.5 seconds ke baad fade-out shuru hoga
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Fade animation complete hone ke baad main app render hoga
      setTimeout(() => {
        onFinish();
      }, 500);
    }, 2800);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-amber-950 via-slate-950 to-amber-900 text-white transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      {/* Background Glow Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-6">
        
        {/* 3D Animated Logo Container with Cloudinary Image */}
        <div className="relative group">
          {/* Glowing Animated Ring */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 opacity-80 blur-xl animate-pulse"></div>
          
          <div className="relative bg-slate-900/80 border-2 border-amber-500/50 p-3 rounded-2xl shadow-2xl backdrop-blur-md transform transition-transform duration-700 hover:scale-105">
            <img 
              src="https://res.cloudinary.com/dxrnkiwr9/image/upload/v1790697457/ChatGPT_Image_Sep_29_2026_09_24_56_PM_iufzt5.png" 
              alt="Vishwakarma Plywood Logo" 
              className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-xl shadow-inner transform hover:rotate-2 transition duration-500"
            />
          </div>
        </div>

        {/* Welcome Text with Gradient */}
        <div className="space-y-2 animate-fade-in">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block">
            Exclusive Collection
          </span>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-pink-400 to-purple-400">Vishwakarma Plywood</span> & Furniture
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Loading your premium wood experience...
          </p>
        </div>

        {/* Loading Bar */}
        <div className="w-52 h-1.5 bg-slate-800 rounded-full overflow-hidden mt-2 shadow-inner">
          <div className="h-full bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 animate-[pulse_1s_infinite]"></div>
        </div>

      </div>

    </div>
  );
}