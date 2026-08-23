import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsappWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = "https://wa.me/5511999999999?text=Ol%C3%A1%21%20Tenho%20uma%20d%C3%BAvida%20sobre%20o%20acompanhamento%20nutricional%20da%20Dra.%20La%C3%ADs%20Leal.";

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3 pointer-events-none">
      
      {/* Floating Message Card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto bg-[#111B21] text-white p-3.5 sm:p-4 rounded-2xl shadow-card border border-white/10 flex items-start gap-3 max-w-[260px] sm:max-w-[300px] relative group"
          >
            {/* Green Online Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0 mt-1" />

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-grow text-xs sm:text-sm font-medium leading-snug hover:text-emerald-400 transition-colors pr-2"
            >
              Olá! Dúvida sobre o acompanhamento? Respondo rápido aqui.
            </a>

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-white/60 hover:text-white transition-colors p-0.5 rounded-full hover:bg-white/10 flex-shrink-0"
              aria-label="Fechar mensagem"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-card transition-all duration-300 group flex-shrink-0"
        aria-label="Conversar no WhatsApp"
      >
        {/* Red Notification Badge */}
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm">
          1
        </span>

        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:scale-110 transition-transform" />
      </motion.a>

    </div>
  );
}
