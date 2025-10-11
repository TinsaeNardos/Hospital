"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div>
 <motion.div 
  className="relative h-90 bg-cover bg-center pt-32 md:pt-40 mt-16"

  style={{ backgroundImage: 'url(/new5.jpg)' }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <div className="absolute inset-0 bg-black/40" />
</motion.div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
  <motion.h1 
    className="text-primary text-4xl md:text-6xl font-bold mb-4"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    About Us
  </motion.h1>
  <motion.p 
    className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-medium"
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    Transportation Tailored for Your Needs.
  </motion.p>
</section>
<motion.p 
  className="text-gray-600 text-base md:text-lg font-medium mt-4 text-left w-full px-4 sm:px-6 lg:px-8"
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  LATX Transportation is an Austin, Texas–based non-emergency medical transportation provider proudly serving Central Texas and surrounding areas. With a growing team and strong dedication to patient care, we take pride in offering safe, reliable, and compassionate ambulatory and wheelchair transportation.
</motion.p>


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
            <p className="mt-4">At LATX Transportation, our mission is to provide safe, reliable, and compassionate non-emergency medical transportation to every passenger we serve. We strive to make every trip comfortable, timely, and stress-free, while maintaining the highest standards of professionalism and care.</p>
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
            <Image src="/new.jpg" alt="Owner 3" width={500} height={500} className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-2xl font-semibold">Your Safety, Our Promise</h2>
            <p className="mt-4">At LATX Transportation, your safety and comfort come first. We follow strict safety standards and keep our vehicles in top condition to ensure a secure, dependable ride every time. Our professional drivers and caring staff are dedicated to delivering compassionate, respectful service—giving you confidence and peace of mind from pickup to drop-off.</p>
          </div>
        </motion.div>

  
      </div>
    </div>
  );
}