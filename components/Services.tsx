import React from 'react';
import { SERVICES } from '@/constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            Soluciones Integrales para tu Obra
          </h3>
          <p className="text-gray-600 text-lg">
            Cubrimos todas las etapas de la construcción, desde la idea inicial hasta la entrega de la llave, garantizando calidad y compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-card overflow-hidden"
            >
              {/* Layered Icon */}
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand-primary rounded-2xl rotate-6"></div>
                <div className="relative w-full h-full bg-brand-dark rounded-2xl flex items-center justify-center">
                  <service.icon className="text-white w-7 h-7" />
                </div>
              </div>

              <h4 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
