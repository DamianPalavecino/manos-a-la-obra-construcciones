'use client';

import React, { useState, useMemo } from 'react';
import { PROJECTS } from '@/constants';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Image from 'next/image';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = ['Todos', 'Vivienda', 'Remodelación', 'Comercial', 'Obra en Proceso'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const navigatePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === 0 ? filteredProjects.length - 1 : selectedIndex - 1);
  };

  const navigateNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(selectedIndex === filteredProjects.length - 1 ? 0 : selectedIndex + 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setSelectedIndex(null);
    if (e.key === 'ArrowLeft') navigatePrev();
    if (e.key === 'ArrowRight') navigateNext();
  };

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Nuestros Proyectos
            </h3>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${
                  activeCategory === category
                    ? 'bg-white text-brand-dark shadow-lg border-white'
                    : 'bg-transparent text-gray-300 hover:bg-white/10 hover:text-white border-white/20 hover:border-white/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer bg-gray-800 ring-1 ring-white/10 hover:ring-white/30 transition-all duration-300"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${
                  project.id === 1 ? 'object-center' : ''
                }`}
                style={project.id === 1 ? { objectPosition: 'center center' } : undefined}
              />

              {/* Permanent Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:from-black/95 group-hover:via-black/40 transition-all duration-300">

                {/* Content - Slides Up on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold text-lg mb-2">{project.title}</h4>
                  <div className="flex items-center text-brand-light text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span>Ver proyecto</span>
                    <Maximize2 className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={24} />
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigatePrev();
            }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              navigateNext();
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Image with Info Bar */}
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filteredProjects[selectedIndex].image}
              alt={filteredProjects[selectedIndex].title}
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-xl"
            />
            <div className="mt-4 flex justify-between items-center text-white">
              <div>
                <span className="text-brand-light text-sm uppercase tracking-wider">
                  {filteredProjects[selectedIndex].category}
                </span>
                <h3 className="text-xl font-bold">{filteredProjects[selectedIndex].title}</h3>
              </div>
              <span className="text-gray-400">
                {selectedIndex + 1} / {filteredProjects.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
