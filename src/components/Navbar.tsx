import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, BookOpen, Book, Award, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(11,25,48,0.7)] backdrop-blur-md border-b border-white/10">

      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/ba5f9b8e-a532-490c-aeb0-f5fa692dc6d0.png" 
              alt="Future Labs Logo" 
              style={{ height: '40px', width: '5.4rem' }}
              className="w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-white/90 hover:text-white transition-colors font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white/90 hover:text-white transition-colors font-medium">
            About
          </Link>
          <Link to="/programs" className="text-white/90 hover:text-white transition-colors font-medium">
            Programs
          </Link>
          <Link to="/startups" className="text-white/90 hover:text-white transition-colors font-medium">
            Startups
          </Link>
          <Link to="/initiatives" className="text-white/90 hover:text-white transition-colors font-medium">
            Initiatives
          </Link>
          <Link to="/blog" className="text-white/90 hover:text-white transition-colors font-medium">
            Blog
          </Link>
          <Link to="/contact" className="text-white/90 hover:text-white transition-colors font-medium">
            Contact
          </Link>
          <Button asChild variant="default" className="font-medium bg-primary hover:bg-primary/90 text-white">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Panel */}
      <div
        ref={menuRef}
        className={cn(
          "md:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm bg-gray-800 border-b border-b-amber-600 b z-50 transform transition-transform duration-300 ease-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-white/10">
          <span className="text-lg font-bold text-white">Menu</span>
          <button
            className="text-white hover:text-primary focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="bg-gray-800 flex flex-col items-center space-y-6 px-6 py-8 overflow-y-auto">
          <Link to="/" className="text-xl font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="text-xl font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/programs" className="text-xl font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Programs</Link>
          <Link to="/startups" className="text-xl font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Startups</Link>
          <Link to="/initiatives" className="text-xl font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Initiatives</Link>
          <Link to="/blog" className="text-xl font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className="text-xl font-bold text-white hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
          <Button asChild variant="default" className="font-bold mt-6 w-full bg-primary hover:bg-primary/90 text-white text-lg py-3 rounded-lg">
            <Link to="/register" onClick={() => setIsOpen(false)}>Get Started</Link>
          </Button>
        </div>
      </div>


    </nav>
  );
};

export default Navbar;
