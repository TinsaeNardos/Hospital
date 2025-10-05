"use client";

import { sendEmail } from "@/lib/resend";
import { Button } from "@/components/ui/button"; // Adjust import based on your folder structure
import { Input } from "@/components/ui/input";  // Adjust import based on your folder structure
import { Textarea } from "@/components/ui/textarea"; // Adjust import based on your folder structure
import { Card } from "@/components/ui/card"; // Import Card for the text column
import { useSearchParams } from "next/navigation";

export default function ContactForm() {
 
const searchParams = useSearchParams(); // Access search params
    const v = searchParams.get('v'); // Get the value of 'v'
    const c = searchParams.get('c'); // Get the value of 'c'

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto space-y-4 md:space-y-0">
                {/* Contact Form Column */}
                <Card className="flex-1 p-6">
                    <form action={sendEmail} className="space-y-4">
                        <label htmlFor="name">Name:</label>
                        <Input type="text" id="name" name="name" required />

                        <label htmlFor="email">Email:</label>
                        <Input type="email" id="email" name="email" required />

                        <label htmlFor="message">Message:</label>
                        <Textarea id="message" name="message" required />

                        <Button type="submit" className="w-full">Send</Button>
                         {v && <p>Email sent successfully! </p>}
            {c && <p>Email not sent successfully Resend !</p>}
                    </form>
                </Card>

                {/* Text Column */}
                <Card className="flex-1 p-6 mt-4 md:mt-0 md:ml-4">
                    <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                    <p className="mb-4">
                        Thank you for considering K & K Medical Transport for your non-emergency medical transportation needs. We are here to assist you and look forward to answering any questions you may have or helping you schedule a transportation service.
                    </p>
                    <p className="mb-2"><span className="mr-2">📧</span>kkmedicaltransport@gmail.com</p>
                    <p className="mb-2">  <span className="mr-2">📞</span> 512 945-4047</p>
                    <h3 className="font-bold mt-4">Business Hours</h3>
                    <ul className="list-disc list-inside mt-2">
                        <li>Monday: 7 AM–7 PM</li>
                        <li>Tuesday: 7 AM–7 PM</li>
                        <li>Wednesday: 7 AM–7 PM</li>
                        <li>Thursday: 7 AM–7 PM</li>
                        <li>Friday: 7 AM–7 PM</li>
                        <li>Saturday: 7 AM–7 PM</li>
                        <li>Sunday: Closed</li>
                    </ul>
                </Card>
            </div>
        </main>
    );
}