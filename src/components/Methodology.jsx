import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Sparkles } from 'lucide-react';

export default function Methodology() {
  const steps = [
    {
      number: "01",
      title: "Consulta Detalhada",
      description: "Anamnese minuciosa para entender seus hábitos, rotina de trabalho, preferências alimentares, nível de estresse, digestão e análise completa de exames laboratoriais.",
      cardBg: "bg-sage-100/90 text-brand-dark border-sage-200"
    },
    {
      number: "02",
      title: "Plano 100% Personalizado",
      description: "Construção conjunta de um cardápio flexível e saboroso, adaptado aos alimentos que você gosta, sem ingredientes caros ou estratégias impraticáveis.",
      cardBg: "bg-brand-dark/40 text-white border-sage-600/50 backdrop-blur-sm"
    },
    {
      number: "03",
      title: "Acompanhamento Contínuo",
      description: "Acompanhamento próximo com reavaliação de métricas (composição corporal e exames) e suporte via WhatsApp para tirar dúvidas a qualquer momento.",
      cardBg: "bg-brand-dark/40 text-white border-sage-600/50 backdrop-blur-sm"
    },
    {
      number: "04",
      title: "Resultados a Longo Prazo",
      description: "Conquista da reeducação alimentar e autonomia para fazer boas escolhas na vida social, viagens e eventos sem culpa e sem retrocessos.",
      cardBg: "bg-sage-100/90 text-brand-dark border-sage-200"
    }
  ];

  return (
    <section id="metodologia" className="py-20 md:py-28 bg-[#3E5645] text-white relative overflow-hidden">
      
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-700/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sage-300" />
            <span>Passo a Passo</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-3xl leading-tight">
            Como é feito todo o meu acompanhamento nutricional
          </h2>
        </div>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl p-8 sm:p-10 border shadow-card flex flex-col justify-between space-y-6 ${step.cardBg} transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl sm:text-3xl font-bold opacity-80">
                  {step.number}. {step.title}
                </span>
              </div>

              <p className="text-sm sm:text-base opacity-90 leading-relaxed font-normal">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://wa.me/5511917908668?text=Ol%C3%A1%21%20Quero%20entender%20mais%20sobre%20a%20metodologia%20de%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-beige-300 hover:bg-beige-400 text-brand-dark px-9 py-4 rounded-full text-xs font-semibold uppercase tracking-wider shadow-pill transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-brand-dark" />
            <span>Conversar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
