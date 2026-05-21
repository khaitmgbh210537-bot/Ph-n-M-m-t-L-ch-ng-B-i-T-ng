import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Hỗ Trợ Giải Đáp</span>
          <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight leading-tight">
            Câu hỏi thường gặp
          </h2>
          <div className="w-16 h-1.5 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Một số thắc mắc phổ biến của đối tác và khách hàng khi tìm hiểu hệ thống marketing Facebook Minh Khải MKT.
          </p>
        </div>

        {/* Accordion Stack */}
        <div id="faq-accordion-group" className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`border rounded-2xl transition-all overflow-hidden ${isOpen ? 'border-brand-vibrant shadow-sm bg-blue-50/10' : 'border-slate-100 bg-white'}`}
              >
                {/* Accordion Header Trigger */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-slate-800 text-sm sm:text-base hover:text-brand-vibrant transition-colors cursor-pointer select-none"
                >
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-4.5 w-4.5 text-brand-vibrant shrink-0 mt-0.5" />
                    {faq.question}
                  </span>
                  <span className={`h-6 w-6 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-brand-vibrant/10 text-brand-vibrant' : 'text-slate-500'}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>

                {/* Accordion Body Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/50">
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
