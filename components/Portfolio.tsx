'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/constants';
import { X } from 'lucide-react';
import Image from 'next/image';

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="proyectos" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-3">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">Nuestros Últimos Proyectos</h3>
          </div>
          <div className="hidden md:block">
             {/* Optional category filters could go here */}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div 
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer bg-gray-800"
              onClick={() => setSelectedImage(project.image)}
            >
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-light text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                <h4 className="text-white font-bold text-lg">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <Image 
            src={selectedImage} 
            alt="Proyecto Ampliado" 
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;