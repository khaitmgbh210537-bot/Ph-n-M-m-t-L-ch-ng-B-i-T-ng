import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import PillarsList from './components/PillarsList';
import ProcessSteps from './components/ProcessSteps';
import BenefitsSection from './components/BenefitsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmissionSuccess = () => {
    setIsModalOpen(false);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="landing-app" className="min-h-screen bg-white text-slate-800 font-sans antialiased overflow-x-hidden selection:bg-brand-vibrant/10 selection:text-brand-vibrant">
      
      {/* Header Navigation */}
      <Header onOpenConsultation={handleOpenModal} />

      {/* Main Page Layout */}
      <main id="main-content">
        
        {/* Hero Banner Section */}
        <Hero onOpenConsultation={handleOpenModal} />

        {/* Core Pain Points Section */}
        <PainPoints />

        {/* Software Pillars Interactive Grid (MKT Care, MKT UID) */}
        <PillarsList />

        {/* 8-Step Transfer and Deployment Flow */}
        <ProcessSteps />

        {/* Deep Blue High-Contrast Benefits & Statistics Grid */}
        <BenefitsSection />

        {/* Professional Pricing Section */}
        <PricingSection onOpenConsultation={handleOpenModal} />

        {/* Interactive FAQ accordion block */}
        <FAQSection />

        {/* Lower Banner CTA Card and Consultation Form Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-100" id="dang-ky">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ConsultationForm id="footer-consultation-form" onSuccess={handleSubmissionSuccess} />
          </div>
        </section>

      </main>

      {/* Footer Branding & Links */}
      <Footer />

      {/* Floating Call Assistance Action (Zalo Floating Badge) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        <a
          href="https://zalo.me/0399036609"
          target="_blank"
          rel="noopener noreferrer"
          title="Liên hệ tư vấn Zalo"
          id="floating-zalo-badge"
          className="h-14 w-14 rounded-full bg-[#0068ff] hover:bg-[#002ba1] flex items-center justify-center text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm font-bold"
        >
          <span className="font-sans leading-none tracking-tight">Zalo</span>
        </a>
      </div>

      {/* Animated Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl w-full max-w-lg p-6 sm:p-8 shadow-2xl relative z-10 border border-slate-100 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                id="btn-close-modal"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Injected Form */}
              <ConsultationForm id="modal-consultation-form" isModal={true} onSuccess={handleSubmissionSuccess} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modern Feedback Toast on successful submission */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 left-6 z-50 bg-emerald-600 text-white rounded-2xl px-5 py-4 shadow-xl border border-emerald-500 flex items-center gap-3.5 max-w-sm"
          >
            <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center text-white">
              <Check className="h-4 w-4 stroke-[3]" />
            </div>
            <div className="text-left">
              <h5 className="font-bold text-sm">Gửi thành công!</h5>
              <p className="text-xs text-emerald-100 mt-0.5">Chúng tôi đã lưu lại thông tin và sẽ sớm liên hệ.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
