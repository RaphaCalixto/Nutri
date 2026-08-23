import React from 'react';
import { Leaf, Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 border-t border-sage-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-sage-800">
          
          {/* Col 1: Brand Logo & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sage-500/20 flex items-center justify-center text-sage-300">
                <Leaf className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  Dra. Laís Leal
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-sage-300">
                  Nutrição Integrativa
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sage-200/70 max-w-sm font-normal leading-relaxed">
              Acompanhamento nutricional individualizado e baseado em evidências para você conquistar saúde, energia e alta performance.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-sage-800 hover:bg-sage-600 text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-sage-800 hover:bg-sage-600 text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:contato@dralaislealnutri.com.br"
                className="w-9 h-9 rounded-full bg-sage-800 hover:bg-sage-600 text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-sage-200/70">
              <li><a href="#hero" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Mim</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Atendimento
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-sage-200/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sage-400 flex-shrink-0 mt-0.5" />
                <span>Av. Paulista, 1000 - Sala 804, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span>contato@dralaislealnutri.com.br</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sage-200/50 gap-4">
          <p>© {new Date().getFullYear()} Dra. Laís Leal Nutricionista. Todos os direitos reservados. CRN-3 12345/P.</p>
          <p className="tracking-widest uppercase">Desenvolvido com excelência</p>
        </div>

      </div>
    </footer>
  );
}
