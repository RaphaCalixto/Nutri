import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Calendar, Coffee, Car } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F3ED] relative bg-leaf-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Text & Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-200/60 border border-sage-300 text-brand-medium text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-sage-600" />
              <span>Espaço Físico</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark leading-tight">
              Agende sua consulta em nosso consultório
            </h2>

            <p className="text-base sm:text-lg text-brand-dark/80 font-normal leading-relaxed">
              Um ambiente preparado para oferecer o máximo de conforto, acolhimento e privacidade durante todo o seu atendimento. Equipado com avaliação física de bioimpedância de alta precisão.
            </p>

            {/* Feature Pills */}
            <div className="w-full space-y-3 pt-2">
              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-sage-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700 flex-shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-brand-dark">
                  Fácil acesso com estacionamento conveniado no local
                </span>
              </div>

              <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-sage-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-sage-100 flex items-center justify-center text-sage-700 flex-shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-brand-dark">
                  Ambiente privativo, moderno, climatizado e acolhedor
                </span>
              </div>
            </div>

            {/* Address Badge */}
            <div className="flex items-center gap-2 text-xs font-medium text-brand-dark/70 pt-1">
              <MapPin className="w-4 h-4 text-sage-600" />
              <span>Av. Paulista, 1000 - Sala 804 • Bela Vista, São Paulo - SP</span>
            </div>

            {/* CTA Button */}
            <div className="pt-2 w-full sm:w-auto">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20presencial%20no%20consult%C3%B3rio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-button hover:bg-brand-buttonHover text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-pill transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Presencial</span>
              </a>
            </div>
          </motion.div>

          {/* Right Image: Clinic Room Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-card bg-sage-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800"
                alt="Consultório de Nutrição"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-sage-200 flex items-center justify-between text-xs font-semibold text-brand-dark">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-sage-600" />
                  São Paulo - SP (Presencial & Online para todo o mundo)
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
