import React from 'react';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';
import { INSTAGRAM_HANDLE } from '@/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222] text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          <div className="flex items-center">
            <Image
              src="/images/vertical-logo.png"
              alt="Manos a la Obra Construcciones"
              width={120}
              height={180}
              className="h-24 w-auto"
            />
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href={`https://instagram.com/${INSTAGRAM_HANDLE.replace('@', '')}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} Manos a la Obra Construcciones S.A. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;