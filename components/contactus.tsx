"use client"
import { sendEmail} from "@/lib/resend";
export default function ContactForm() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form action={sendEmail}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required />
                <button type="submit">Send</button>
                
            </form>
        </main>
        
    );
}