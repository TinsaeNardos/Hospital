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
        {/* Row 1 */}
        <motion.div 
          className="flex flex-col md:flex-row items-center mb-16" 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: false }}
        >
          <div className="md:w-1/2 md:order-2">
            <Image src="/hofront.jpg" alt="Owner 1" width={500} height={500} className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:order-1">
            <h2 className="text-2xl font-semibold">Owner</h2>
            <p className="mt-4">With a distinguished career spanning 15 years in the skilled and long-term nursing field, Owner name has dedicated her expertise to ensuring safe and compassionate transportation for those in need. At LATX Transportation, she has found her calling at the intersection of healthcare and reliable transport, committed to providing exceptional service and support for every journey</p>
          </div>
        </motion.div>

        {/* Row 2 */}
        <motion.div 
          className="flex flex-col md:flex-row items-center mb-16" 
          initial={{ y: 50, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: false }}
        >
          <div className="md:w-1/2">
            <Image src="/in.jpg" alt="Owner 2" width={500} height={500} className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-4">At LATX Transportation, we strive to deliver dependable and caring non-emergency medical transportation. Our goal is to ensure that every client experiences a smooth and supportive journey, prioritizing their comfort and well-being at every step.</p>
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
            <Image src="/serv.jpg" alt="Owner 3" width={500} height={500} className="rounded-lg" />
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
            <h2 className="text-2xl font-semibold">Your Safety, Our Priority</h2>
            <p className="mt-4">At LATX Transportation, your safety is our utmost concern. We implement rigorous safety protocols and maintain our vehicles to the highest standards, ensuring a secure and reliable journey for every client. Our trained staff is dedicated to providing compassionate care, giving you peace of mind throughout your transport experience</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}