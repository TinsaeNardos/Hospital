import { navItems } from "@/lib/constants";
import Link from "next/link"

import MobileNavigation from "./MobileNavigation";

export default function Navbar() 
{
  return  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
 
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/*logo*/}
        <div><h1 className="text-2xl font-black font-heading text-primary">LATX TRANSPORTATION</h1></div>
        {/*Desktop Navigation*/}
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-8">
            {navItems.map((item) => (
              <Link className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300" key={item.name} href={item.href}>{item.name}</Link>
              ))}
          </div>
        </div>
   {/*mobile*/}
   <div className="md:hidden">
    <MobileNavigation />
   </div>
        </div></div> 
  </nav>
}