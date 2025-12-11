import React from 'react';
import { STEPS } from '@/constants';

const Process: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-2 bg-brand-dark/5 rounded-full text-brand-dark text-sm font-bold tracking-widest uppercase mb-4">
            Proceso de Trabajo
          </span>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
            ¿Cómo trabajamos?
          </h3>
          <p className="text-gray-600 text-lg">
            Un proceso simple y transparente para que disfrutes la transformación de tu espacio sin preocupaciones.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative">
          {/* Enhanced Connecting Line */}
          <div className="absolute top-[60px] left-[10%] right-[10%] h-1 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-dark/20 to-transparent rounded-full"></div>
          </div>

          <div className="grid grid-cols-5 gap-6 relative z-10">
            {STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="relative mb-10">
                  {/* Outer Ring */}
                  <div className="absolute -inset-3 rounded-full bg-brand-dark/5"></div>
                  {/* Main Circle */}
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-brand-dark to-brand-primary text-white flex items-center justify-center text-2xl font-bold shadow-[0_8px_30px_-6px_rgba(45,45,45,0.4)]">
                    {step.number}
                  </div>
                  {/* Connecting Dot */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-dark/30"></div>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full">
                  <h4 className="text-lg font-bold text-brand-dark mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-dark/20 via-brand-dark/40 to-brand-dark/20"></div>

          <div className="space-y-8">
            {STEPS.map((step, index) => (
              <div key={index} className="flex gap-6 items-start relative">
                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-brand-dark to-brand-primary text-white flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.number}
                </div>
                {/* Content */}
                <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <h4 className="text-lg font-bold text-brand-dark mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
