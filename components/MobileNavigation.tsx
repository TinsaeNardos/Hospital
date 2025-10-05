"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { div } from "motion/react-client";
import { navItems } from "@/lib/constants";
import Link from "next/link";

export default function MobileNavigation()
{ const [isOpen,setIsOpen]=useState(false);
  return (
    <>
    
  
  <div><Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
    {isOpen ? <X className="w-5 h-5"/> : <Menu className="w-5 h-5 " color="black" />} </Button>
  </div>
  {isOpen && (
    <div className={`shadow-lg fixed left-0 right-0 top-16 z-40 md:hidden ${isOpen ? 'opacity-100':'opacity-0 pointer-events-none'} `}>
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border ">
        {navItems.map((item) => (
          <Link className="text-foreground hover:text-primary block px-3 py-2 font-medium" key={item.name} href={item.href}>{item.name}</Link>
        ))}
      </div>
    </div>
  )}
    </>
);
}