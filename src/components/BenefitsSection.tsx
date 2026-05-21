import React from 'react';
import { motion } from 'motion/react';
import { METRICS, KEY_BENEFITS } from '../data';
import { Headset, RefreshCw, ShieldCheck, Zap, Star } from 'lucide-react';

export default function BenefitsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'headset':
        return <Headset className="h-5 w-5 text-brand-accent scale-110" />;
      case 'refresh':
        return <RefreshCw className="h-5 w-5 text-brand-accent scale-110" />;
      case 'shield':
        return <ShieldCheck className="h-5 w-5 text-brand-accent scale-110" />;
      case 'zap':
        return <Zap className="h-5 w-5 text-brand-accent scale-110" />;
      default:
        return <Star className="h-5 w-5 text-brand-accent" />;
    }
  };

  return (
    <section id="loi-ich" className="py-20 bg-[#004dc2] text-white relative overflow-hidden">
      {/* Decorative vector overlays */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 h-96 w-96 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side Metrics list */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
            <div className="space-y-4">
              <span className="text-xs font-bold text-blue-200 uppercase tracking-widest block">Cam kết đỉnh cao</span>
              <h2 className="text-3xl sm:text-4.5xl font-bold tracking-tight text-white leading-tight">
                Lợi ích vượt trội
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Minh Khải MKT là đối tác cung cấp giải pháp tiếp cận khách hàng tự động tối ưu nhất hiện nay cho đội ngũ kinh doanh bất động sản.
              </p>
            </div>

            {/* Metrics mapping */}
            <div className="space-y-8 divide-y divide-blue-400/25">
              {METRICS.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`flex flex-col gap-1.5 pt-6 ${idx === 0 ? 'pt-0' : ''}`}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl sm:text-5xl font-extrabold text-brand-accent leading-none select-none tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-sm font-bold text-white tracking-wide">
                      {metric.label}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-light">
                    {metric.subLabel}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side Glass Cards Grid (2x2) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {KEY_BENEFITS.map((benefit, idx) => (
              <motion.div
                key={benefit.id}
                id={`benefit-card-${benefit.id}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="bg-white/10 hover:bg-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 transition-all group shadow-sm flex flex-col justify-start items-start gap-4"
              >
                {/* Visual Circle for icon */}
                <div className="h-11 w-11 rounded-xl bg-white/20 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                  {getIcon(benefit.iconName)}
                </div>

                <div className="space-y-1 text-left">
                  <h3 className="font-bold text-base sm:text-lg text-white leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] text-blue-100/90 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
