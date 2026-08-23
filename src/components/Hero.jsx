import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-leaf-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start space-y-6"
          >
            {/* Pill Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sage-200/60 border border-sage-300 text-brand-medium text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sage-600" />
              <span>Dra. Laís Leal • Nutricionista</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-brand-dark leading-[1.15]">
              Laís Leal | Nutricionista <span className="italic font-normal text-sage-700">Clínica & Esportiva</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-brand-dark/80 max-w-xl font-normal leading-relaxed">
              Transforme a sua relação com a comida e alcance seus objetivos de saúde, emagrecimento ou performance. Um acompanhamento 100% individualizado, desenhado sob medida para a sua rotina e estilo de vida.
            </p>

            {/* CTA Button */}
            <div className="pt-2 w-full sm:w-auto">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Quero%20agendar%20minha%20consulta%20com%20a%20Dra.%20La%C3%ADs%20Leal."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-button hover:bg-brand-buttonHover text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto group"
              >
                <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Agendar Sua Consulta</span>
              </a>
            </div>

            {/* Highlights bullet points underneath */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-medium text-brand-dark/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage-600" />
                <span>Atendimento Presencial e Online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sage-600" />
                <span>Sem Dietas Restritivas</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Image Composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Background Sage Circle Backdrop */}
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-sage-300/40 -z-10 blur-2xl transform translate-y-6"></div>

            {/* Arch Photo Container */}
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Main Professional Photo with Arch Top Frame */}
              <div className="relative rounded-[160px_160px_32px_32px] overflow-hidden border-4 border-white shadow-card bg-sage-100 aspect-[3/4]">
                <img
                  src="/lais-leal.jpg"
                  alt="Dra. Laís Leal Nutricionista"
                  className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Mini Badge 1 (Bottom-left) */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-card border border-sage-200 flex items-center gap-3 max-w-[200px]"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-sage-200">
                  <img 
                    src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=300" 
                    alt="Nutrição Saudável"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-brand-dark">+1.000 Vidas</span>
                  <span className="text-[11px] text-brand-dark/70 font-medium leading-tight">Transformadas com saúde</span>
                </div>
              </motion.div>

              {/* Floating Mini Badge 2 (Top-right) */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-12 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-card border border-sage-200 flex items-center gap-3 max-w-[210px]"
              >
                <div className="w-10 h-10 rounded-full bg-sage-500/15 flex items-center justify-center text-sage-700 flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-brand-dark">Acompanhamento</span>
                  <span className="text-[11px] text-brand-dark/70 font-medium leading-tight">100% Personalizado</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
