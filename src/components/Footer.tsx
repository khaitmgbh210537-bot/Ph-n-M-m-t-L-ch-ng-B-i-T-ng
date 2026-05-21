import React from 'react';
import { Send, PhoneCall, Facebook, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="app-footer" className="bg-[#f0f4f9] border-t border-slate-200/50 py-12 md:py-16 text-slate-600 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-300/30">
          
          {/* Logo & Note */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-lg bg-brand-vibrant flex items-center justify-center text-white font-bold text-base shadow-sm">
                M
              </span>
              <span className="font-bold text-lg tracking-tight text-brand-primary">
                Minh Khải <span className="text-brand-accent">MKT</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed">
              Phát triển hệ thống phần mềm automation marketing, tối ưu quy trình tìm kiếm khách hàng, tăng trưởng hiệu quả quảng bá tin đăng cho môi giới bất động sản tại Việt Nam.
            </p>
            <div className="text-[11px] text-brand-vibrant font-semibold flex items-center gap-1.5 bg-blue-50 py-1.5 px-3 rounded-lg border border-blue-150 self-start w-fit">
              <span>Giải pháp Marketing AI dẫn đầu thị trường</span>
            </div>
          </div>

          {/* Quick links map */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Đường dẫn nhanh</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => scrollTo('#trang-chu')} className="hover:text-brand-vibrant transition-colors cursor-pointer">Trang Chủ</button>
              </li>
              <li>
                <button onClick={() => scrollTo('#van-de')} className="hover:text-brand-vibrant transition-colors cursor-pointer">Vấn Đề Gặp Phải</button>
              </li>
              <li>
                <button onClick={() => scrollTo('#tinh-nang')} className="hover:text-brand-vibrant transition-colors cursor-pointer">Tính Năng Phần Mềm</button>
              </li>
              <li>
                <button onClick={() => scrollTo('#quy-trinh')} className="hover:text-brand-vibrant transition-colors cursor-pointer">Quy Trình Triển Khai</button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Thông tin liên hệ</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-slate-500">
                <span className="font-bold text-slate-700 shrink-0">Điện thoại / Zalo:</span>
                <a href="tel:0399036609" className="hover:text-brand-vibrant transition-colors font-mono">0399.036.609</a>
              </li>
              <li className="flex items-center gap-2 text-slate-500">
                <span className="font-bold text-slate-700 shrink-0">Telegram:</span>
                <a href="https://t.me/minhkhaimkt" target="_blank" rel="noopener noreferrer" className="hover:text-brand-vibrant transition-colors font-mono">@minhkhaimkt</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright and legal note */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>© 2026 Minh Khải MKT. Tất cả quyền được bảo lưu.</span>
          </div>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-vibrant transition-colors" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://t.me/minhkhaimkt" target="_blank" rel="noopener noreferrer" className="hover:text-brand-vibrant transition-colors" aria-label="Telegram Channel">
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
