import React, { useState } from 'react';
import { Leaf, Menu, X, Calendar } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Como Funciona', href: '#metodologia' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F3ED]/90 backdrop-blur-md border-b border-sage-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-sage-500/10 flex items-center justify-center text-sage-700 group-hover:bg-sage-500 group-hover:text-white transition-all duration-300">
              <Leaf className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-brand-dark">
                Dra. Laís Leal
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-sage-600">
                Nutrição Integrativa
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-dark/80 hover:text-sage-700 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sage-500 hover:after:w-full after:transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20nutricional."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-button hover:bg-brand-buttonHover text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-pill transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Consulta
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-brand-dark hover:bg-sage-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#F5F3ED] border-b border-sage-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-brand-dark hover:bg-sage-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5511999999999?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20nutricional."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-brand-button hover:bg-brand-buttonHover text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider block shadow-pill transition-all"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}
