import React from 'react';
import { WHATSAPP_NUMBER } from '@/constants';
import Image from 'next/image';
import WhatsAppIcon from './WhatsAppIcon';

const Hero: React.FC = () => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent('Hola, me gustaría cotizar un proyecto.')}`;

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Modern Architecture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 to-brand-dark/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl text-white">
        
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-6 drop-shadow-lg">
            Construimos tu futuro, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">ladrillo a ladrillo.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
            Somos una empresa constructora con años de experiencia en el rubro. 
            Especialistas en obras llave en mano, reformas integrales y dirección de obra profesional.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white text-brand-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform" />
              Cotizá Tu Proyecto
            </a>
            <a
              href="#proyectos"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center text-center"
            >
              Ver Obras Realizadas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;