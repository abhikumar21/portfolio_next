"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { textGradientColor, hoverWhiteText, backGradientColor } from '@/utils/classNames';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container flex justify-between items-center">
        <Link href="/">
          <span className={`text-2xl font-bold tracking-wider`}>Hi !!</span>
        </Link>
        
        {/* Desktop Menu */}  
        <div className="hidden md:flex space-x-8 lg:mr-10">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`}>
              <span className={`text-gray-300 transition-colors ${hoverWhiteText}`}>{item}</span>
            </Link>
          ))}
          {/* <a href="/resume.pdf" className={`btn btn-primary text-black ${backGradientColor}`}>Resume</a> */}
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 p-4 flex flex-col space-y-4">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
              <span className="block py-2 text-gray-300 hover:text-violet-400 transition-colors">{item}</span>
            </Link>
          ))}
          {/* <a href="/resume.pdf" className="btn btn-primary text-center" onClick={() => setMenuOpen(false)}>Resume</a> */}
        </div>
      )}
    </nav>
  );
}