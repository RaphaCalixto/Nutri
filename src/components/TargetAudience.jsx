import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Dumbbell, HeartPulse, Sparkles, Calendar } from 'lucide-react';

export default function TargetAudience() {
  const targetCards = [
    {
      icon: Flame,
      title: "Emagrecimento & Definição Corporal",
      description: "Para quem busca perder gordura corporal de forma consciente, preservando a massa magra e acabando de vez com o efeito sanfona."
    },
    {
      icon: Dumbbell,
      title: "Ganho de Massa Muscular & Performance",
      description: "Para praticantes de atividades físicas ou atletas que querem acelerar a hipertrofia, ter mais energia nos treinos e recuperar o corpo rápido."
    },
    {
      icon: HeartPulse,
      title: "Saúde Intestinal & Qualidade de Vida",
      description: "Para quem sofre com desconfortos abdominais, estufamento, má digestão, ansiedade alimentar, fadiga crônica ou sono desregulado."
    },
    {
      icon: Sparkles,
      title: "Prevenção & Readequação Metabólica",
      description: "Para controlar exames laboratoriais (colesterol, glicemia, triglicerídeos, tireoide) e garantir longevidade com disposição diária."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-bg relative bg-leaf-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Heading, Subtitle & Button */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-start space-y-6"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark leading-tight">
              Para quem é o meu acompanhamento nutricional?
            </h2>

            <p className="text-base sm:text-lg text-brand-dark/80 font-normal leading-relaxed">
              O acompanhamento nutricional é indicado para homens e mulheres que desejam parar de tentar dietas prontas da internet e querem uma estratégia personalizada que funciona de verdade.
            </p>

            {/* CTA Button */}
            <div className="pt-2 w-full sm:w-auto">
              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Quero%20saber%20se%20o%20acompanhamento%20nutricional%20%C3%A9%20indicado%20para%20o%20meu%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-button hover:bg-brand-buttonHover text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-pill transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Minha Avaliação</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: 4 Horizontal Cards Stack */}
          <div className="lg:col-span-7 space-y-4">
            {targetCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#C5B59E]/40 hover:bg-[#C5B59E]/60 border border-[#B8A78F]/60 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm flex items-start gap-4 sm:gap-5 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-sage-700 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-dark">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
