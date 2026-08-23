import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, ShieldCheck } from 'lucide-react';

export default function ValueProposition() {
  const points = [
    "Avaliação metabólica, estilo de vida e exames 100% individualizados",
    "Plano alimentar flexível, prazeroso e adaptado à sua rotina real",
    "Reeducação alimentar definitiva sem dietas restritivas ou malucas",
    "Acompanhamento próximo e suporte contínuo via WhatsApp entre consultas"
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rounded Container Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-sage-100/80 border border-sage-200/80 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-card relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Image with Arch Shape & Floating Seal */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
                
                {/* Image Frame */}
                <div className="arch-frame overflow-hidden border-4 border-white shadow-soft bg-sage-200 aspect-[3/4]">
                  <img
                    src="/lais-leal.jpg"
                    alt="Dra. Laís Leal Nutricionista"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Circular Floating Badge Seal */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white p-2 shadow-card flex items-center justify-center border border-sage-200">
                  <div className="w-full h-full rounded-full border border-dashed border-sage-400 flex flex-col items-center justify-center text-center p-1 bg-sage-50">
                    <ShieldCheck className="w-5 h-5 text-sage-600 mb-0.5" />
                    <span className="text-[9px] font-bold uppercase tracking-wider text-brand-dark leading-tight">
                      Nutrição Consciente
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Text Content & Checklist */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark leading-tight">
                A nutrição é o alicerce fundamental para sua energia, saúde e resultados duradouros
              </h2>

              <p className="text-base sm:text-lg text-brand-dark/80 font-normal leading-relaxed">
                Mais do que contar calorias, o acompanhamento nutricional integrativo investiga a causa raiz dos seus sintomas. Ajustamos seus nutrientes para equilibrar seus exames, otimizar sua digestão, melhorar a qualidade do sono e acelerar o alcance das suas metas corporais.
              </p>

              {/* Checklist Pills */}
              <div className="w-full space-y-3 pt-2">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3.5 sm:p-4 rounded-2xl border border-sage-200/80 shadow-sm"
                  >
                    <div className="w-7 h-7 rounded-full bg-sage-500/15 flex items-center justify-center text-sage-700 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-brand-dark/90 leading-snug">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4 w-full sm:w-auto">
                <a
                  href="https://wa.me/5511917908668?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20consulta%20nutricional."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-brand-button hover:bg-brand-buttonHover text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-pill hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Quero Minha Consulta</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
