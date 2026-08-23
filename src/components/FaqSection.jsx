import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Como funciona a consulta presencial e a consulta online?",
      answer: "Ambas as modalidades oferecem a mesma profundidade de análise! Na consulta presencial realizamos a avaliação física completa no consultório. Na consulta online (via videochamada), fazemos a avaliação de métricas com foto, fita métrica e análise detalhada dos seus sintomas e rotina."
    },
    {
      question: "Qual é a duração do acompanhamento nutricional?",
      answer: "A consulta inicial dura cerca de 1 hora a 1 hora e 15 minutos, onde investigamos toda a sua história nutricional. Os retornos e reavaliações costumam ser mensais para acompanhar a sua evolução metabólica e ajustar o plano."
    },
    {
      question: "O plano alimentar inclui alimentos caros ou difíceis de encontrar?",
      answer: "De forma alguma! Priorizo a comida de verdade: arroz, feijão, vegetais, frutas, proteínas e alimentos acessíveis do seu dia a dia. Você não precisará gastar fortunas em suplementos caros ou ingredientes exóticos."
    },
    {
      question: "Aceita plano de saúde / convênio médico?",
      answer: "O atendimento é particular, mas fornecemos recibo e nota fiscal com todas as especificações técnicas necessárias para você solicitar o reembolso integral ou parcial junto ao seu convênio médico."
    },
    {
      question: "Como funciona o suporte entre as consultas?",
      answer: "Você terá canal direto via WhatsApp com a Dra. Laís Leal durante todo o período do seu acompanhamento. Ficou com dúvida no supermercado ou no restaurante? É só mandar uma mensagem!"
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#48664E] text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-white/90 bg-white/10 px-4 py-1.5 rounded-full border border-white/20">
            Tire Suas Dúvidas
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Dúvidas Frequentes
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-sage-200 text-brand-dark shadow-sm transition-all"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-serif text-lg sm:text-xl font-semibold text-brand-dark pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-sage-100 flex items-center justify-center text-sage-700 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 bg-sage-500 text-white' : ''}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-brand-dark/80 leading-relaxed border-t border-sage-100/60 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
