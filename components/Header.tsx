'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_NUMBER } from '@/constants';
import WhatsAppIcon from './WhatsAppIcon';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Hola, me gustaría cotizar un proyecto.')}`;

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        (isScrolled || isOpen) 
          ? isOpen ? 'bg-brand-dark py-2 sm:py-3 shadow-md' : 'bg-brand-dark/95 backdrop-blur-sm py-2 sm:py-3 shadow-md'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Image
            src="/images/extended-logo-with-words.png"
            alt="Manos a la Obra Construcciones"
            width={300}
            height={90}
            className="h-14 sm:h-16 lg:h-20 w-auto group-hover:scale-105 transition-transform"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-wide hover:text-brand-light transition-colors ${
                isScrolled ? 'text-white' : 'text-white drop-shadow-sm'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-gray-100 transition-colors shadow-sm flex items-center gap-2"
          >
            COTIZÁ AHORA
            <WhatsAppIcon size={18} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none z-50 p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-brand-dark border-t border-brand-light/20 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col p-6 gap-1">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-base font-medium py-3 px-4 hover:bg-white/10 hover:text-brand-light rounded-lg transition-all border-b border-white/5 last:border-0"
              onClick={() => setIsOpen(false)}
              style={{
                animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : 'none',
                opacity: isOpen ? 1 : 0
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-dark text-center py-3 px-6 rounded-lg font-bold mt-4 hover:bg-gray-100 transition-all shadow-lg flex items-center justify-center gap-2"
            onClick={() => setIsOpen(false)}
            style={{
              animation: isOpen ? 'slideIn 0.3s ease-out 0.3s forwards' : 'none',
              opacity: isOpen ? 1 : 0
            }}
          >
            COTIZÁ POR WHATSAPP
            <WhatsAppIcon size={18} />
          </a>
        </nav>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;