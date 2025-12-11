'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Check, ChevronDown } from 'lucide-react';
import { EMAIL_ADDRESS, LOCATION, WHATSAPP_NUMBER } from '@/constants';
import WhatsAppIcon from './WhatsAppIcon';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    projectType: 'Construcción Nueva',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola! 👋

Mi nombre es: *${formData.name}*

Tipo de proyecto: *${formData.projectType}*

Mensaje:
${formData.message}

Gracias! 🙏`;
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const phoneNumber = '+(54) 11 3024-9544';
  const phoneNumberClean = phoneNumber.replace(/[^\d+]/g, ''); // Remove spaces and special chars for tel: link
  
  const contactItems = [
    { 
      icon: MapPin, 
      title: 'Ubicación', 
      value: LOCATION,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`,
      isLink: true
    },
    { 
      icon: Phone, 
      title: 'Llamanos', 
      value: phoneNumber,
      href: `tel:${phoneNumberClean}`,
      isLink: true
    },
    { 
      icon: Mail, 
      title: 'Escribinos', 
      value: EMAIL_ADDRESS,
      href: `mailto:${EMAIL_ADDRESS}`,
      isLink: true
    },
  ];

  return (
    <section id="contacto" className="py-24 md:py-32 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">

          {/* Contact Info */}
          <div>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              ¿Soñando con tu nuevo hogar?
            </h3>
            <p className="text-gray-300 text-lg mb-10 max-w-md">
              Dejanos tu consulta y te respondemos a la brevedad. Estamos listos para comenzar tu próximo proyecto.
            </p>

            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.title === 'Ubicación' ? '_blank' : undefined}
                  rel={item.title === 'Ubicación' ? 'noopener noreferrer' : undefined}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer block"
                >
                  <div className="p-3 bg-gradient-to-br from-white/20 to-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 text-brand-dark shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
            <h4 className="text-2xl font-bold mb-2">Solicitar Presupuesto</h4>
            <p className="text-gray-500 mb-8">Completá el formulario y te contactamos</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-gray-700 group-focus-within:text-brand-dark transition-colors">
                  Nombre Completo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-brand-dark focus:bg-white transition-all duration-300 placeholder:text-gray-400"
                    placeholder="Tu nombre"
                  />
                  {formData.name.length > 2 && (
                    <Check className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 w-5 h-5" />
                  )}
                </div>
              </div>

              {/* Project Type Select */}
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Tipo de Proyecto
                </label>
                <div className="relative">
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-brand-dark focus:bg-white transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option>Construcción Nueva</option>
                    <option>Remodelación / Reforma</option>
                    <option>Dirección de Obra</option>
                    <option>Otro</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="group">
                <label className="block text-sm font-semibold mb-2 text-gray-700">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:border-brand-dark focus:bg-white transition-all duration-300 resize-none placeholder:text-gray-400"
                  placeholder="Contanos sobre tu proyecto..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-brand-dark to-brand-primary text-white font-bold py-5 rounded-xl hover:shadow-button active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <WhatsAppIcon size={20} />
                <span className="relative">Enviar por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
