import React from 'react';
import { SERVICES } from '@/constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-dark text-sm font-bold tracking-widest uppercase mb-3">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Soluciones Integrales para tu Obra</h3>
          <p className="text-gray-600 text-lg">
            Cubrimos todas las etapas de la construcción, desde la idea inicial hasta la entrega de la llave, garantizando calidad y compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl border border-gray-100"
            >
              <div className="w-14 h-14 bg-brand-dark rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-white w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
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