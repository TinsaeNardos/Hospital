"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
      {/* Background Section with Animation */}
      <motion.div 
        className="relative h-90 bg-cover bg-center pt-24 md:pt-32" 
        style={{ backgroundImage: 'url(/abt.jpg)' }} 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
         
      >
        <div className="flex flex-col items-start justify-start h-full bg-backgroundImage bg-opacity-50 px-8">
          <motion.h1 
            className="text-primary text-4xl md:text-6xl font-bold" 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-black text-base md:text-lg mt-4 font-bold " 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.2 }} // Slightly delayed for effect
          >
           Transportation Tailored for Your Needs.
          </motion.p>
        </div>
      </motion.div>

      {/* Content sections with Scroll Animation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
     
        
        {/* Row 2 */}
        <motion.div 
          className="flex flex-col md:flex-row items-center mb-16" 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: false }}
        >
          <div className="md:w-1/2">
            <Image src="/fr3.jpg" alt="Owner 2" width={500} height={500} className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4">LATX Transportation is an Austin, Texas–based non-emergency medical transportation provider proudly serving Central Texas and surrounding areas. With a growing team and strong dedication to patient care, we take pride in offering safe, reliable, and compassionate ambulatory and wheelchair transportations.</p>
          </div>
        </motion.div>

        {/* Row 3 */}
        <motion.div 
          className="flex flex-col md:flex-row items-center mb-16" 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: false }}
        >
          <div className="md:w-1/2 md:order-2">
            <Image src="/in.jpg" alt="Owner 3" width={500} height={500} className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-2xl font-semibold">Our Services</h2>
            <p className="mt-4">At LATX Transportation, we provide a comprehensive range of non-emergency medical transportation options designed to meet the diverse needs of our clients. From ambulatory and wheelchair transport to stretcher services and hospital transfers, our dedicated team ensures that every journey is safe, comfortable, and tailored to the individuals requirements. We are committed to delivering reliable and compassionate care, making each ride a seamless experience.</p>
          </div>
        </motion.div>

        {/* Row 4 */}
        <motion.div 
          className="flex flex-col md:flex-row items-center mb-16" 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: false }}
        >
          <div className="md:w-1/2">
            <Image src="/our.jpg" alt="Owner 4" width={500} height={500} className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold">Your Safety, Our Promise</h2>
            <p className="mt-4">At LATX Transportation, your safety and comfort come first. We follow strict safety standards and keep our vehicles in top condition to ensure a secure, dependable ride every time. Our professional drivers and caring staff are dedicated to delivering compassionate, respectful service—giving you confidence and peace of mind from pickup to drop-off.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}