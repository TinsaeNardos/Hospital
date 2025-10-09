import { navItems } from "@/lib/constants";
import Link from "next/link"

import MobileNavigation from "./MobileNavigation";
import { Truck } from "lucide-react";
export default function Navbar() 
{
  return  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
 
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/*logo*/}
  <div>
 {/* Logo Section */}
<Link href="/" className="flex items-center space-x-3 group">
  <Truck className="w-8 h-8 text-[#0056B8] group-hover:scale-105 transition-transform duration-200" />
  <div className="flex flex-col leading-none">
    <span className="text-xl font-extrabold text-[#0A2E75] tracking-tight">
      LATX
    </span>
    <span className="text-[10px] tracking-[0.25em] text-[#0A2E75] font-semibold">
      TRANSPORTATION
    </span>
  </div>
</Link>

</div>
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