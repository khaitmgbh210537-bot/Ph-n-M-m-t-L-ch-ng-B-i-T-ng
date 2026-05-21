import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export default function Header({ onOpenConsultation }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Trang Chủ", href: "#trang-chu" },
    { label: "Vấn Đề", href: "#van-de" },
    { label: "Tính Năng", href: "#tinh-nang" },
    { label: "Quy Trình", href: "#quy-trinh" },
    { label: "Bảng Giá", href: "#bang-gia" },
    { label: "Lợi Ích", href: "#loi-ich" },
    { label: "Câu Hỏi", href: "#faq" }
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#trang-chu" id="logo-link" className="flex items-center gap-2 group">
              <span className="h-10 w-10 rounded-xl bg-brand-vibrant flex items-center justify-center text-white font-bold text-xl shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform">
                M
              </span>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-brand-primary group-hover:text-brand-vibrant transition-colors">
                  Minh Khải <span className="text-brand-accent">MKT</span>
                </span>
                <span className="text-[9px] font-medium text-slate-400 tracking-widest uppercase">
                  Marketing Solution 4.0
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                id={`nav-item-${idx}`}
                onClick={() => handleNavClick(item.href)}
                className="text-[15px] font-medium text-slate-600 hover:text-brand-vibrant transition-colors relative py-2 group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-vibrant transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0399036609"
              id="header-phone-link"
              className="flex items-center gap-2 text-sm font-semibold text-brand-primary hover:text-brand-vibrant transition-colors"
            >
              <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-brand-vibrant border border-slate-100">
                <PhoneCall className="h-3.5 w-3.5" />
              </div>
              <span className="font-mono text-slate-700">0399.036.609</span>
            </a>
            <button
              id="btn-header-cta"
              onClick={onOpenConsultation}
              className="bg-brand-vibrant hover:bg-brand-primary text-white text-[15px] font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Tư Vấn Ngay</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              id="btn-header-cta-mobile"
              onClick={onOpenConsultation}
              className="bg-brand-vibrant hover:bg-brand-primary text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-md transition-all cursor-pointer"
            >
              Tư Vấn
            </button>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div id="mobile-menu" className="md:hidden border-b border-slate-100 bg-white/98 backdrop-blur-lg animate-fadeIn duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                id={`nav-item-mobile-${idx}`}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-brand-vibrant hover:bg-slate-50 transition-all"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-100 px-4 flex flex-col gap-3">
              <a
                href="tel:0399036609"
                id="header-phone-link-mobile"
                className="flex items-center gap-3 py-2 text-slate-700 font-medium"
              >
                <PhoneCall className="h-5 w-5 text-brand-vibrant" />
                <span className="font-mono">0399.036.609</span>
              </a>
              <button
                id="btn-mobile-cta-expand"
                onClick={() => {
                  setIsOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-brand-vibrant hover:bg-brand-primary text-white text-center font-semibold py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                Tư Vấn Nhận Ưu Đãi
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
