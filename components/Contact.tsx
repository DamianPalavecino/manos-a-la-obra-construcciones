'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
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
    // Formatea el mensaje para WhatsApp de manera estructurada
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

  return (
    <section id="contacto" className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-3">Contacto</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              ¿Soñando con tu nuevo hogar?
            </h3>
            <p className="text-gray-300 text-lg mb-10 max-w-md">
              Dejanos tu consulta y te respondemos a la brevedad. Estamos listos para comenzar tu próximo proyecto.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <MapPin className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ubicación</h4>
                  <p className="text-gray-300">{LOCATION}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Phone className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Llamanos</h4>
                  <p className="text-gray-300">+(54) 11 3024-9544</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Escribinos</h4>
                  <p className="text-gray-300">{EMAIL_ADDRESS}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 text-brand-dark">
            <h4 className="text-2xl font-bold mb-6">Solicitar Presupuesto</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Nombre Completo</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Tipo de Proyecto</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-colors appearance-none"
                >
                  <option>Construcción Nueva</option>
                  <option>Remodelación / Reforma</option>
                  <option>Dirección de Obra</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1 text-gray-700">Mensaje</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-dark/20 focus:border-brand-dark transition-colors resize-none"
                  placeholder="Escribí tu mensaje aquí..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-dark text-white font-bold py-4 rounded-lg hover:bg-black transition-colors flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={18} />
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;