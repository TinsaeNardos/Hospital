import { navItems } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Replace the Truck icon with your car image */}
    <div className="w-12 h-12 relative group-hover:scale-105 transition-transform duration-200 flex items-center">
  <Image
    src="/log.jpg" // path to your car photo in public folder
    alt="LATX Car"
    fill
    className="object-contain"
  />
</div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-extrabold text-[black] tracking-tight">
                  LATX
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[black] font-semibold">
                  TRANSPORTATION
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-300"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </nav>
  );
}
