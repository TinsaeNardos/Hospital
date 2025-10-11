"use client";
import * as motion from 'motion/react-client';
import { Button } from "./ui/button";
import { useState } from 'react';

export default function Hero() {
  const [contactInfo, setContactInfo] = useState<string | null>(null);

  const handleCallClick = () => setContactInfo("+1 (737) 363-9064");
  const handleEmailClick = () => setContactInfo("Latxtransportation2023@gmail.com");

  return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero.jpg"
      />

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto text-white">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          Reliable Care & Safe Rides <br />
          <span className="text-primary">Every Time</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-xl md:text-2xl mb-8 font-light max-w-3xl"
        >
          Serving Austin and surrounding areas with reliable, compassionate medical transport
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8"
            onClick={handleCallClick}
          >
            CALL
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8"
            onClick={handleEmailClick}
          >
            EMAIL
          </Button>
        </motion.div>

        {contactInfo && (
          <p className="mt-4 text-lg font-bold text-white">{contactInfo}</p>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
