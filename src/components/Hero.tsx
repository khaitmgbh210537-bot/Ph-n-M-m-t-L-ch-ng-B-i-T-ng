import React from 'react';
import { motion } from 'motion/react';
import { Send, MessageSquareCode, ArrowDown } from 'lucide-react';
import heroBanner from '../assets/images/hero_real_estate_marketing_1779339170318.png';

interface HeroProps {
  onOpenConsultation: () => void;
}

export default function Hero({ onOpenConsultation }: HeroProps) {
  const scrollToPainPoints = () => {
    const section = document.querySelector('#van-de');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="trang-chu" className="relative overflow-hidden bg-white pt-10 pb-20 md:py-28">
      {/* Background decorations for a professional ambient atmosphere */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-50/50 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-orange-50/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-vibrant animate-pulse" />
              <span className="text-xs font-semibold text-brand-vibrant tracking-wide uppercase">
                Giải pháp Marketing Bất động sản 4.0
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 id="hero-headline" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
                Phần Mềm Đặt Lịch <br className="hidden sm:inline" />
                <span className="relative inline-block text-brand-vibrant mt-1">
                  Đăng Bài Tự Động
                  <span className="absolute left-0 bottom-1 w-full h-1.5 bg-brand-accent/20 rounded-full -z-10" />
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Đăng bài tự động, quét UID nhóm, tìm kiếm tệp khách hàng tiềm năng chất lượng cao từ đối thủ một cách chuyên nghiệp và tối ưu chi phí quảng cáo vượt trội.
              </p>
            </motion.div>

            {/* Quick Actions Panel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2"
            >
              <a
                href="https://zalo.me/0399036609"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-hero-zalo"
                className="flex items-center justify-center gap-2.5 bg-[#0068ff] hover:bg-[#0055d0] text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <MessageSquareCode className="h-5 w-5" />
                <span>Liên hệ Zalo của tôi</span>
              </a>

              <a
                href="https://t.me/minhkhaimkt"
                target="_blank"
                rel="noopener noreferrer"
                id="btn-hero-telegram"
                className="flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 font-semibold py-3.5 px-8 rounded-xl transition-all hover:-translate-y-0.5 shadow-sm hover:shadow-md cursor-pointer text-center"
              >
                <Send className="h-5 w-5 text-[#229ED9]" />
                <span>Nhắn Telegram</span>
              </a>
            </motion.div>

            {/* Interactive feature list highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4 w-full border-t border-slate-100 pt-6"
            >
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-brand-vibrant">✓</span> Miễn Phí Demo Cài Đặt
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-brand-vibrant">✓</span> Hướng Dẫn 1-1 Uy Tín
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-brand-vibrant">✓</span> Vận Hành An Toàn
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="text-brand-vibrant">✓</span> Hỗ Trợ Kỹ Thuật 24/7
              </div>
            </motion.div>

            {/* Scroll Indicator button */}
            <motion.button
              onClick={scrollToPainPoints}
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-vibrant transition-colors pt-4 cursor-pointer"
            >
              <ArrowDown className="h-3.5 w-3.5" /> Thăm quan giải pháp
            </motion.button>
          </div>

          {/* Right Hero Image Column */}
          <div className="lg:col-span-6 flex justify-center items-center relative">
            {/* Soft decorative background circles */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-brand-vibrant to-brand-accent opacity-10 blur-xl -z-10" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/10 border border-slate-100 max-w-lg lg:max-w-full w-full"
            >
              <img
                src={heroBanner}
                alt="Minh Khải MKT - Real Estate Marketing Automation Software"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Overlay interactive mini indicator chip */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 border border-white/20 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 absolute" />
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-800">Bản Cập Nhật 2026 Mới Nhất</span>
                    <span className="text-[10px] text-slate-500 font-mono">Bổ sung chống checkpoint AI</span>
                  </div>
                </div>
                <button
                  id="btn-hero-learn-more"
                  onClick={onOpenConsultation}
                  className="bg-brand-vibrant hover:bg-brand-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  Dùng thử ngay
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
