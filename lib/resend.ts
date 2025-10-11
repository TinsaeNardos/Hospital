'use server';  // VERY IMPORTANT: Mark this as a server action

import { Resend } from "resend";
import { redirect } from 'next/navigation'
    

export async function sendEmail(formData: FormData) {
    const API_KEY = process.env.RESEND_API_KEY;
         let resend: Resend | undefined;
    try {
        if (!API_KEY) {
        throw new Error("API key is not defined.");
        }
        resend = new Resend(API_KEY);
     console.log("Object Resend set up properly");}
     catch (err) {
       return { success: false, message: "API key is not defined." };
    }



const name = formData.get("name") as string;
const phoneNumber = formData.get("phoneNumber") as string;
const pickupAddress = formData.get("pickupAddress") as string;
const dropoffLocation = formData.get("dropoffLocation") as string;
const appointmentDateTime = formData.get("appointmentDateTime") as string;
const roundTrip = formData.get("roundTrip") as string;
const wheelchairAccessible = formData.get("wheelchairAccessible") as string;
const message = formData.get("message") as string;
    if (!resend) {
    return { success: false, message: "Resend object is not initialized." };
    }

    try {
        const data = await resend.emails.send({
            to: "tinsaetesfaye2003@gmail.com",
            from: "OrcDev <onboarding@resend.dev>",
            subject: "Contact Form Submission",
            html: `    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
                <h2 style="color: #4A90E2;">New Contact Form Submission</h2>
        <hr style="border: 1px solid #4A90E2; margin: 10px 0;">
        <ul style="list-style-type: none; padding: 0;">
        
      <li><strong>Full Name:</strong> ${name}</li>
          <li><strong>Phone Number:</strong> ${phoneNumber}</li>
            <li><strong>Pickup Address:</strong> ${pickupAddress}</li>
            <li><strong>Drop-off Location:</strong> ${dropoffLocation}</li>
            <li><strong>Appointment Date & Time:</strong> ${appointmentDateTime}</li>
            <li><strong>Round Trip:</strong> ${roundTrip}</li>
       <li><strong>Wheelchair Accessible:</strong> ${wheelchairAccessible}</li>
        <li><strong>Notes:</strong> ${message}</li>
    </ul></div>`
        });
        return { success: true }; // No message needed

        //return { success: true }; // Indicate success - Can't use with redirect
    } catch (error) {
        return { success: false, message: "Error sending email." };
        //return { success: false, error: error.message }; // Indicate failure - Can't use with redirect
    }
}
