"use client";
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

import { sendEmail } from "@/lib/resend";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";  
import { Textarea } from "@/components/ui/textarea"; 
import { Card } from "@/components/ui/card"; 
import { useState } from 'react';
import React from 'react';

export default function ContactForm() {
    const [message, setMessage] = useState(""); // State for success messages
    const [error, setError] = useState(""); // State for error messages

    // Explicitly type the event parameter
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission
        setMessage(""); // Reset message
        setError(""); // Reset error

        const formData = new FormData(event.currentTarget);
        
        const response = await sendEmail(formData); // Call your sendEmail function

        if (response.success) {
            setMessage(response.message); // Set success message
        } else {
            setError(response.message); // Set error message
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-24 px-6 md:px-24">

            <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto space-y-4 md:space-y-0">
                {/* Contact Form Column */}
                <Card className="flex-1 p-6">
                    <form onSubmit={handleSubmit} className="space-y-4"> {/* Use onSubmit instead of action */}
                        <label htmlFor="name">Full Name</label>
                        <Input type="text" id="name" name="name" required />

                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <Input type="tel" id="phoneNumber" name="phoneNumber" required />

                        <label htmlFor="pickupAddress">Pickup Address:</label>
                        <Input type="text" id="pickupAddress" name="pickupAddress" required />

                        <label htmlFor="dropoffLocation">Drop-off Location:</label>
                        <Input type="text" id="dropoffLocation" name="dropoffLocation" required />

                        <label htmlFor="appointmentDateTime">Appointment Date & Time:</label>
                        <Input type="datetime-local" id="appointmentDateTime" name="appointmentDateTime" required />

                        <label htmlFor="roundTrip">Round Trip (Yes/No):</label>
                        <select id="roundTrip" name="roundTrip" required>
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <br />

                        <label htmlFor="wheelchairAccessible">Wheelchair Accessible (Yes/No):</label>
                        <select id="wheelchairAccessible" name="wheelchairAccessible" required>
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <br />

                        <label htmlFor="message">Notes/Special Instructions:</label>
                        <Textarea id="message" name="message" required />

                        <Button type="submit" className="w-full">Send</Button>
                    </form>
                           {message && <p className="text-green-500 mt-4">{message}</p>}
                    {error && <p className="text-red-500 mt-4">{error}</p>}
                </Card>

                {/* Text Column */}
                <Card className="flex-1 p-6 mt-4 md:mt-0 md:ml-4">
                    <motion.h2
                        className="text-2xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }} // Initial state
                        animate={{ opacity: 1, y: 0 }}   // Final state
                        transition={{ duration: 0.6 }}    // Animation duration
                    >
                        Let&apos;s Get You There Safely
                    </motion.h2>
                    <motion.p
                        className="mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }} // Slight delay
                    >
                        Ready to schedule your next ride? Whether you need a one-time trip or ongoing transportation, LATX Transportation is here to make travel to your medical appointments simple, safe, and dependable.
                    </motion.p>
                    <motion.p
                        className="mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }} // Slight delay
                    >
                        <span className="mr-2">📧 Email</span> Latxtransportation2023@gmail.com
                    </motion.p>
                    <motion.p
                        className="mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }} // Slight delay
                    >
                        <span className="mr-2">📞 Call/Text</span> +1 (737) 363-9064
                      
                    </motion.p>
                    <motion.h3
                        className="font-bold mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }} // Slight delay
                    >
                        <span className="mr-2">🕒</span> Business Hours
                    </motion.h3>
                    <motion.ul
                        className="list-disc list-inside mt-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }} // Slight delay
                    >
                        <li>Monday: 6 AM - 6 PM</li>
                        <li>Tuesday: 6 AM - 6 PM</li>
                        <li>Wednesday:6 AM - 6 PM</li>
                        <li>Thursday: 6 AM - 6 PM</li>
                        <li>Friday:6 AM - 6 PM</li>
                        <li>Saturday:6 AM - 6 PM</li>
                        <li>Sunday: Closed</li>
                    </motion.ul>
                   <motion.p
                        className="font-bold mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }} // Slight delay
                    >
                        <span className="mr-2">           <Link 
  href="https://www.instagram.com/Latx_transportation" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-10 h-10 bg-blue-800/40 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
> 
  <Instagram className="w-5 h-5" />
</Link></span> 
                    </motion.p>  
             
                </Card>
            </div>
        </main>
    );
}