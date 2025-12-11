import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { INSTAGRAM_HANDLE, EMAIL_ADDRESS, LOCATION } from '@/constants';

const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: `https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`, label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#111] text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Image
              src="/images/vertical-logo.png"
              alt="Manos a la Obra Construcciones"
              width={140}
              height={200}
              className="h-28 w-auto mb-6"
            />
            <p className="text-gray-500 max-w-md leading-relaxed mb-6">
              Construimos sueños con calidad, transparencia y compromiso.
              Más de 10 años transformando espacios en hogares.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 relative">
              Enlaces Rápidos
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-light"></span>
            </h5>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white hover:translate-x-1 inline-flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-light/50"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-white font-bold text-lg mb-6 relative">
              Contacto
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-light"></span>
            </h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-light mt-1 flex-shrink-0" />
                <span className="text-gray-500">{LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-light flex-shrink-0" />
                <span className="text-gray-500">+(54) 11 3024-9544</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-light flex-shrink-0" />
                <span className="text-gray-500">{EMAIL_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Manos a la Obra Construcciones S.A. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-600 hover:text-white transition-colors">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
