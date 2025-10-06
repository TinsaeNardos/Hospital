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
        console.log(err);
    }
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    if (!resend) {
      console.error("Resend object is not initialized. Aborting email send.");
      redirect('/error');
      return;
    }

    try {
        const data = await resend.emails.send({
            to: "tinsaetesfaye2003@gmail.com",
            from: "OrcDev <onboarding@resend.dev>",
            subject: "Contact Form Submission",
            html: `<p>You have a contact form submission:</p><ul><li>Name: ${name}</li><li>Email: ${email}</li><li>Message: ${message}</li></ul>`
        });
        console.log("Email sent successfully:", data);
        redirect('/success');
        //return { success: true }; // Indicate success - Can't use with redirect
    } catch (error) {
        console.error("Error sending email:", error);
        redirect('/error');
        //return { success: false, error: error.message }; // Indicate failure - Can't use with redirect
    }
}
