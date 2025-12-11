import React from 'react';
import { FEATURES } from '@/constants';
import Image from 'next/image';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-brand-dark/5 rounded-full text-brand-dark text-sm font-bold tracking-widest uppercase mb-4">
              ¿Por qué elegirnos?
            </span>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8">
              Construimos confianza, no solo paredes
            </h3>

            <div className="space-y-4">
              {FEATURES.map((feature, index) => (
                <div
                  key={index}
                  className="group flex gap-5 p-5 rounded-2xl bg-white border border-transparent hover:border-gray-200 hover:shadow-lg transition-all duration-300 -mx-5"
                >
                  {/* Enhanced Icon Container */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand-dark/10 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                      <div className="relative w-14 h-14 bg-gradient-to-br from-brand-dark to-brand-primary rounded-xl flex items-center justify-center shadow-[0_4px_14px_-4px_rgba(45,45,45,0.3)] group-hover:shadow-[0_8px_20px_-4px_rgba(45,45,45,0.4)] group-hover:scale-105 transition-all duration-300">
                        <feature.icon size={24} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-dark transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative Background Shape */}
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-dark/5 to-transparent rounded-3xl -rotate-3"></div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-black/5">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Arquitecto en obra"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent"></div>
            </div>

            {/* Floating Badge - Years */}
            <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white p-6 rounded-2xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] border border-gray-100 max-w-[220px] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-shadow duration-300">
              <div className="text-5xl font-bold mb-1 text-gradient">
                10+
              </div>
              <div className="text-sm text-gray-600 font-medium leading-tight">
                Años de experiencia construyendo hogares
              </div>
            </div>

            {/* Floating Badge - Projects */}
            <div className="absolute -top-4 -right-4 md:-right-8 bg-brand-dark text-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-xs text-gray-300">Proyectos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
