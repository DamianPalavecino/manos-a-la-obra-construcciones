import React from 'react';
import { TESTIMONIALS } from '@/constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
            Lo que dicen nuestros clientes
          </h3>
          <p className="text-gray-600">
            La confianza de nuestros clientes es nuestro mayor logro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-card"
            >
              {/* Large Decorative Quote */}
              <div className="absolute top-6 right-6 text-brand-accent">
                <Quote size={60} className="fill-current opacity-50" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={`${
                      star <= testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar with Initials */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-dark to-brand-primary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <h5 className="font-bold text-brand-dark text-lg">{testimonial.name}</h5>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
