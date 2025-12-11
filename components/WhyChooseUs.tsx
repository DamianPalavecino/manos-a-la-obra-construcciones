import React from 'react';
import { FEATURES } from '@/constants';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-brand-dark text-sm font-bold tracking-widest uppercase mb-3">¿Por qué elegirnos?</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8">
              Construimos confianza, no solo paredes
            </h3>
            
            <div className="space-y-8">
              {FEATURES.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-brand-dark border border-gray-100">
                      <feature.icon size={24} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
               <Image 
                 src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Arquitecto en obra" 
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-brand-dark/10"></div>
             </div>
             {/* Floating badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl hidden md:block max-w-[200px]">
               <div className="text-4xl font-bold text-brand-dark mb-1">10+</div>
               <div className="text-sm text-gray-600 font-medium">Años de experiencia construyendo hogares</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;