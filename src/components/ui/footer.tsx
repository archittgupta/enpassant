"use client";

import Link from "next/link";
import { IconBrandFacebook, IconBrandTwitter, IconBrandInstagram, IconChess, IconBrandGithub, IconBrandWhatsapp, IconBrandTelegram } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo & Copyright */}
        <div className="flex items-center space-x-2">
          <IconChess size={32} className="text-white"  />
          <h2 className="text-xl font-semibold"> Enpassant Chess Community</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
        <Link href="/" className="hover:text-gray-400 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-400  transition">About</Link>
          <Link href="/events" className="hover:text-gray-400  transition">Events</Link>
          <Link href="/stats" className="hover:text-gray-400  transition">Stats</Link>
         
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400  transition"><IconChess size={24} /></a>
          <a href="#" className="hover:text-gray-400  transition"><IconBrandTwitter size={24} /></a>
          <a href="#" className="hover:text-gray-400  transition"><IconBrandInstagram size={24} /></a>
          <a href="#" className="hover:text-gray-400  transition"><IconBrandWhatsapp size={24} /></a>
          <a href="#" className="hover:text-gray-400  transition"><IconBrandTelegram size={24} /></a>


          <a href="#" className="hover:text-gray-400  transition"><IconBrandGithub size={24} /></a>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-6">
        © 2025 Enpassant Chess Community. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
