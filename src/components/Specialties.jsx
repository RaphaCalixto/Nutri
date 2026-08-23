import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function Specialties() {
  const specialties = [
    {
      title: "Nutrição Clínica & Reeducação",
      description: "Melhoria de exames laboratoriais, saúde digestiva, readequação metabólica e construção de hábitos alimentares sustentáveis para toda a vida.",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Nutrição Esportiva & Performance",
      description: "Estratégias nutricionais focadas em ganho de massa magra (hipertrofia), rendimento atlético, aumento de força e rápida recuperação muscular.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Emagrecimento & Definição",
      description: "Protocolo de déficit calórico inteligente focado na redução da gordura corporal preservando a musculatura, garantindo saciedade sem passar fome.",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Saúde Intestinal & Longevidade",
      description: "Modulação da microbiota intestinal, redução de estufamento abdominal, diminuição da inflamação corporal e otimização da longevidade.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section id="especialidades" className="py-20 md:py-28 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-100 px-4 py-1.5 rounded-full border border-sage-200">
            Áreas de Atuação
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark max-w-3xl leading-tight">
            Cuidado e nutrição especializada para cada objetivo
          </h2>

          <p className="text-base text-brand-dark/70 max-w-xl">
            Conheça as áreas nas quais posso te ajudar a conquistar seus objetivos com fundamentação científica e acompanhamento humano.
          </p>
        </div>

        {/* 4 Column Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-sage-200 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Image */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-xl font-bold text-brand-dark leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Quero%20agendar%20uma%20consulta%20para%20o%20meu%20objetivo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-button hover:bg-brand-buttonHover text-white px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-pill transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4" />
            <span>Agendar Sua Consulta</span>
          </a>
        </div>

      </div>
    </section>
  );
}
