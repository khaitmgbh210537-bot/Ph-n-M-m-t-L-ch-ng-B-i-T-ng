import React from 'react';
import { motion } from 'motion/react';
import { Clock, Ban, UserMinus, ShieldAlert } from 'lucide-react';
import { PAIN_POINTS } from '../data';

export default function PainPoints() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return <Clock className="h-6 w-6 text-rose-500" />;
      case 'ban':
        return <Ban className="h-6 w-6 text-amber-600" />;
      case 'userMinus':
        return <UserMinus className="h-6 w-6 text-red-500" />;
      default:
        return <ShieldAlert className="h-6 w-6 text-slate-500" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'clock':
        return 'bg-rose-50';
      case 'ban':
        return 'bg-amber-50';
      case 'userMinus':
        return 'bg-red-50';
      default:
        return 'bg-slate-50';
    }
  };

  return (
    <section id="van-de" className="py-20 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#0066cc0d_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Thách thức kinh doanh</span>
          <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight leading-tight">
            Vấn đề khi đăng bài bằng tay
          </h2>
          <div className="w-16 h-1.5 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Nếu bạn đang thực hiện đăng bài lên các hội nhóm Facebook theo cách thủ công, bạn chắc chắn đang gặp phải những bài toán nan giải sau.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PAIN_POINTS.map((pain, idx) => (
            <motion.div
              key={pain.id}
              id={`pain-card-${pain.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group flex flex-col items-start gap-5"
            >
              <div className={`${getIconBg(pain.iconName)} h-14 w-14 rounded-2xl flex items-center justify-center border border-white/50 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                {getIcon(pain.iconName)}
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-slate-800 leading-tight group-hover:text-brand-vibrant transition-colors">
                  {pain.title}
                </h3>
                <p className="text-slate-500 text-sm sm:text-[15px] leading-relaxed">
                  {pain.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic warning banner below problem card */}
        <div className="mt-12 bg-amber-50 border border-amber-100 rounded-2xl p-5 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-4xl mx-auto shadow-xs">
          <div className="flex items-center gap-3.5 text-left">
            <span className="text-2xl">💡</span>
            <p className="text-sm text-amber-800 font-medium">
              Bạn có biết? Hơn <strong>89% nhà môi giới</strong> đã chuyển đổi cơ cấu sang nuôi nick vệ tinh tự động thay vì dùng nick cá nhân đăng bài để tránh mất nick kinh doanh chính.
            </p>
          </div>
          <button
            id="btn-pain-scroller"
            onClick={() => {
              const el = document.querySelector('#tinh-nang');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs py-2 px-5 rounded-lg shadow-sm cursor-pointer transition-colors"
          >
            Đọc Giải Pháp Ngay →
          </button>
        </div>

      </div>
    </section>
  );
}
