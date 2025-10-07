'use client'; // Ensure this file is treated as a Client Component

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import the Image component

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    { name: 'Ambulatory Transport', description: 'Safe rides for patients who can walk independently.' },
    { name: 'Wheelchair Transportation', description: 'Accessible vehicles and trained drivers to assist wheelchair users with care and safety.' },
    { name: 'Dialysis Transportation', description: 'Recurring rides for patients needing regular dialysis treatments.' },
    { name: ' Clinic & Hospital Appointments', description: 'On-time service for medical visits, procedures, and therapy sessions.' },
    { name: ' Flexible Scheduling', description: ' Weekdays, weekends, and after-hours rides available.' },
   
  ];

  return (
    <div className="flex flex-col">
      {/* Full Row Background Photo */}
      <motion.div
        className="relative w-full h-64 bg-cover bg-center p-24 mt-16"
        style={{ backgroundImage: 'url(/fr1.jpg)' }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl text-white font-bold">Our Services</h1>
        </div>
      </motion.div>

      {/* Add margin bottom for more space between sections */}
      <div className="mb-8"></div>

      {/* Service Description Section */}
      <div className="flex flex-col md:flex-row p-8">
        {/* Left Column - Image */}
        <motion.div
          className="md:w-1/2 mb-4 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/fr2.jpg" // Use Image component
            alt="Service Image"
            className="rounded-lg shadow-lg w-full h-auto max-w-md"
            width={800} // Provide width
            height={500} // Provide height
          />
        </motion.div>

        {/* Right Column - Text */}
        <motion.div
          className="md:w-1/2 flex flex-col justify-center pl-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Transportation You Can Count On</h2>
          <p>
           We specialize in safe and reliable non-emergency medical transportation, providing both ambulatory and wheelchair-accessible rides for patients and facilities.
          </p>
        </motion.div>
      </div>

      {/* Services List Section */}
      <div className="flex flex-col md:flex-row p-8">
        {/* Left Column - Title */}
        <motion.div
          className="md:w-1/2 flex items-center justify-center mb-4 md:mb-0"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-semibold">Our Services</h2>
        </motion.div>

        {/* Right Column - Services List */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ul className="list-disc list-inside">
            {services.map((service, index) => (
              <li key={index} className="mb-4">
                <span
                  className="cursor-pointer font-bold text-blue-600 hover:text-purple-600"
                  onClick={() => setSelectedService(selectedService === service.name ? null : service.name)}
                >
                  {service.name}
                </span>
                {selectedService === service.name && (
                  <div className="mt-2 pl-4 text-gray-700">{service.description}</div>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
}