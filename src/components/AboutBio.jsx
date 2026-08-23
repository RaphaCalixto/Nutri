import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, HeartHandshake } from 'lucide-react';

export default function AboutBio() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-sage-100/80 border border-sage-200/80 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Portrait Photo with Arch Cutout */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                <div className="arch-frame overflow-hidden border-4 border-white shadow-card bg-sage-200 aspect-[3/4]">
                  <img
                    src="/lais-leal.jpg"
                    alt="Dra. Laís Leal em seu consultório"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Bio Details */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              <span className="text-xs font-bold uppercase tracking-widest text-sage-600 bg-white/80 px-4 py-1.5 rounded-full border border-sage-200 shadow-sm">
                Sobre a Profissional
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark leading-tight">
                Conheça a Dra. Laís Leal
              </h2>
              <span className="text-xs font-semibold text-sage-700 bg-sage-200/50 px-3 py-1 rounded-md border border-sage-300">
                CRN-3 71644
              </span>

              <p className="text-base sm:text-lg text-brand-dark/85 font-normal leading-relaxed">
                Nutricionista Clínica e Esportiva graduada e pós-graduada em Nutrição Integrativa e Fitoterapia. Com mais de 8 anos de experiência em consultório, minha paixão é transformar vidas através da comida de verdade.
              </p>

              <p className="text-sm sm:text-base text-brand-dark/80 font-normal leading-relaxed">
                Acredito que o pilar fundamental do sucesso nutricional é a individualidade. Não existem dietas milagrosas de gaveta: existe uma estratégia alimentar personalizada desenhada exatamente para a sua rotina, preferências e objetivos de saúde.
              </p>

              {/* Mini Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 w-full">
                <div className="bg-white/80 p-4 rounded-2xl border border-sage-200/70 shadow-sm flex flex-col items-start space-y-1">
                  <GraduationCap className="w-5 h-5 text-sage-600" />
                  <span className="text-xs font-bold text-brand-dark">Pós-Graduada</span>
                  <span className="text-[11px] text-brand-dark/70">Nutrição Integrativa</span>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl border border-sage-200/70 shadow-sm flex flex-col items-start space-y-1">
                  <Award className="w-5 h-5 text-sage-600" />
                  <span className="text-xs font-bold text-brand-dark">+8 Anos</span>
                  <span className="text-[11px] text-brand-dark/70">De Experiência Clínica</span>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl border border-sage-200/70 shadow-sm flex flex-col items-start space-y-1">
                  <HeartHandshake className="w-5 h-5 text-sage-600" />
                  <span className="text-xs font-bold text-brand-dark">Humanizado</span>
                  <span className="text-[11px] text-brand-dark/70">Atendimento Acolhedor</span>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
