import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Wellington Francelino",
      role: "Avaliação no Google",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
      content: "Excelente profissional, tirou todas as minhas dúvidas e me auxiliou no meu processo de emagrecimento, com um acompanhamento próximo e com uma dieta dentro da minha rotina. Nota 10!",
      stars: 5
    },
    {
      name: "Victor Malavasi",
      role: "Avaliação no Google",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content: "Excelente profissional! Desde o primeiro atendimento, demonstrou muita atenção aos detalhes, conhecimento técnico e segurança nas orientações. Além de extremamente qualificada, é uma pessoa muito empática, que realmente escuta e entende as nossas necessidades.",
      stars: 5
    },
    {
      name: "Miin",
      role: "Avaliação no Google",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
      content: "Ela é simplesmente maravilhosa!! Super atenciosa, tira todas as suas dúvidas, sempre está disponível quando você precisa, respeita sua rotina e seu momento, não força uma mudança radical na alimentação e sempre deixa claro para ir aos poucos. Seus pacientes tem muitaaaa sorte de tê-la encontrado!!",
      stars: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#F5F3ED] relative bg-leaf-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2.5 bg-white px-5 py-2.5 rounded-full border border-sage-200 shadow-sm text-xs font-semibold text-brand-dark">
            <span className="text-gold-600 font-bold text-sm">5,0</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
              ))}
            </div>
            <span className="text-brand-dark font-bold text-xs sm:text-sm">• 142 avaliações 5★ no Google</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-dark max-w-2xl leading-tight">
            Conheça as Transformações
          </h2>

          <p className="text-base text-brand-dark/75 max-w-lg">
            Veja o que os pacientes dizem sobre o acompanhamento nutricional integrativo da Dra. Laís Leal.
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

        {/* Link to Google Reviews */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://share.google/8cl1ALLiXTbry8fgJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-brand-dark hover:text-sage-700 bg-white px-7 py-3.5 rounded-full border border-sage-300 shadow-sm hover:shadow-md transition-all group"
          >
            <span>Ver todas as 142 avaliações 5★ no Google</span>
            <span className="text-sage-600 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
