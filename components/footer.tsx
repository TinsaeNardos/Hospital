import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function footer()
{
  return (
  <footer className="bg-gray-800 text-neutral-100 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/*brand*/}
        <div className="col-span-1 md:col-span-2 ">
          <h3 className="text-3xl font-black font-heading text-primary mb-4">Health Logo</h3>
          <div className="flex space-x-4">
           <Link 
  href="https://www.instagram.com/Latx_transportation" 
  target="_blank" 
  rel="noopener noreferrer"
  className="w-10 h-10 bg-gray-800/40 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
> 
  <Instagram className="w-5 h-5" />
</Link>

            
          </div>
        </div>
        {/*resources*/}
        <div>
          <h4 className="text-lg font-bold font-heading mb-4">Resources</h4>
<ul className="space-y-2">
  {[
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contactus" }
  ].map(({ name, path }) => (
    <li key={name}>
      <Link href={path} className="hover:text-primary transition-colors duration-300">
        {name}
      </Link>
    </li>
  ))}
</ul>
        </div>
        {/*contact*/}
        <div>
          <h4 className="text-lg font-bold font-heading mb-4">Contact Info</h4>
          <div className="space-y-3">
            <p><span className="mr-2">📞</span>+1 (737) 363-9064</p>
       <p className="whitespace-nowrap"><span className="mr-2">📧</span>Latxtransportation2023@gmail.com</p>

              <p><span className="mr-2">📍</span> Austin</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300/40 pt-10 text-center text-neutral-400 mt-10"><p>Copyright © 2025 Hospital | All Rights Reserved</p></div>
    </div>
    </footer>

  );
}