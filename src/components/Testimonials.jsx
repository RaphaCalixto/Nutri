import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mariana S.",
      role: "Perdeu 12kg com saúde",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      content: "Já tinha tentado diversas dietas restritivas e sempre voltava a engordar no efeito sanfona. Com o acompanhamento da Dra. Laís Leal aprendi a comer sem culpa e conquistei meu peso ideal comendo comida de verdade!",
      stars: 5
    },
    {
      name: "Carlos H.",
      role: "Ganho de massa muscular & treino",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content: "Meu foco era hipertrofia e mais disposição no dia a dia. O plano ajustado pra minha rotina corrida deu resultados incríveis nos meus exames e na minha composição corporal em menos de 3 meses.",
      stars: 5
    },
    {
      name: "Patrícia L.",
      role: "Saúde intestinal recuperada",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      content: "Sofria com estufamento constante e cansaço extremo. A Dra. Laís Leal fez uma investigação minuciosa da minha digestão. Hoje me sinto leve, com energia renovada e sem dores abdominais.",
      stars: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#F5F3ED] relative bg-leaf-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-100 px-4 py-1.5 rounded-full border border-sage-200">
            Depoimentos Reais
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark max-w-2xl leading-tight">
            Conheça as Transformações
          </h2>

          <p className="text-base text-brand-dark/75 max-w-lg">
            Veja como o acompanhamento nutricional integrativo mudou a rotina e a saúde dos nossos pacientes.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-7 border border-sage-200 shadow-card flex flex-col justify-between relative group hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-sage-200 group-hover:text-sage-300 transition-colors" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-brand-dark/80 italic leading-relaxed">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-sage-100 mt-6">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sage-200"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-lg font-bold text-brand-dark">
                    {item.name}
                  </span>
                  <span className="text-xs text-sage-600 font-medium">
                    {item.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
