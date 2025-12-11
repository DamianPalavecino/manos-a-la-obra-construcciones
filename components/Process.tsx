import React from 'react';
import { STEPS } from '@/constants';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-dark text-sm font-bold tracking-widest uppercase mb-3">Proceso de Trabajo</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">¿Cómo trabajamos?</h3>
          <p className="text-gray-600 text-lg">
            Un proceso simple y transparente para que disfrutes la transformación de tu espacio sin preocupaciones.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center bg-white p-4">
                <div className="w-16 h-16 rounded-full bg-brand-dark text-white flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white shadow-lg relative">
                  {step.number}
                </div>
                <h4 className="text-lg font-bold text-brand-dark mb-3">{step.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;