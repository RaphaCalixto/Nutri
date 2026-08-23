import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

export default function FinalCta() {
  return (
    <section className="py-16 md:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#3E5645] rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-card overflow-hidden relative border border-sage-700"
        >
          {/* Subtle Glow Backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Photo of Professional */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
                <div className="arch-frame overflow-hidden border-4 border-white/20 shadow-card bg-sage-700 aspect-[3/4]">
                  <img
                    src="/lais-leal.jpg"
                    alt="Dra. Laís Leal"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Content & Button */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Nutrição personalizada para você conquistar sua melhor versão com saúde
              </h2>

              <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed">
                Não adie mais o cuidado com o seu corpo e sua vitalidade. Dê o primeiro passo hoje mesmo rumo a uma alimentação mais leve, prazerosa e cheia de resultados.
              </p>

              <div className="pt-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/5511917908668?text=Ol%C3%A1%21%20Quero%20agendar%20minha%20consulta%20nutricional%20agora."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-beige-300 hover:bg-beige-400 text-brand-dark px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-pill transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto group"
                >
                  <Calendar className="w-4 h-4 text-brand-dark" />
                  <span>Agendar Consulta Agora</span>
                  <ArrowRight className="w-4 h-4 text-brand-dark group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
