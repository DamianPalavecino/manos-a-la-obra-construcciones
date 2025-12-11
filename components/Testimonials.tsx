import React from 'react';
import { TESTIMONIALS } from '@/constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-16">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="mb-6 text-brand-light">
                <Quote size={40} className="fill-current opacity-30" />
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <h5 className="font-bold text-brand-dark">{testimonial.name}</h5>
                <span className="text-xs text-gray-400 uppercase tracking-wide">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;