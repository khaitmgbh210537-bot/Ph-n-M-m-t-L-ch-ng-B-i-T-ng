import React from 'react';
import { Send, Phone } from 'lucide-react';

interface ConsultationFormProps {
  id?: string;
  isModal?: boolean;
  onSuccess?: () => void;
}

export default function ConsultationForm({ id = "cta-consult", isModal = false, onSuccess }: ConsultationFormProps) {
  return (
    <div id={id} className="w-full">
      
      {/* Visual Blue CTA Card - Banner exactly matching UI screenshot */}
      <div className="bg-gradient-to-br from-[#0057cc] to-[#00429f] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center shadow-xl border border-blue-400/25">
        
        {/* Soft floating background abstract shapes */}
        <div className="absolute top-0 left-0 -translate-y-24 -translate-x-24 h-72 w-72 rounded-full bg-blue-400/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 translate-y-24 translate-x-24 h-72 w-72 rounded-full bg-brand-accent/10 blur-2xl pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10 flex flex-col items-center">
          <span className="bg-white/10 text-white rounded-full px-4.5 py-1.5 text-xs font-bold tracking-wide uppercase border border-white/15">
            Phần mềm Minh Khải MKT
          </span>
          <h2 className="text-2xl sm:text-4.5xl font-extrabold tracking-tight text-white leading-tight">
            Nhận tư vấn chiến lược ngay hôm nay
          </h2>
          <p className="text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed">
            Đừng để đối thủ vượt mặt, hãy bắt đầu tự động hóa quy trình tiếp thị & đăng bài bán hàng bất động sản của bạn ngay bây giờ cùng Minh Khải MKT.
          </p>

          {/* Social CTAs exactly as seen in design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl pt-4">
            <a
              href="https://zalo.me/0399036609"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-zalo-direct"
              className="bg-white hover:bg-slate-50 text-brand-primary font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-md shadow-blue-900/20 hover:scale-[1.01] transition-all cursor-pointer text-sm sm:text-base"
            >
              <Phone className="h-4 w-4 text-[#0068ff]" />
              <span>Zalo: 0399.036.609</span>
            </a>

            <a
              href="https://t.me/minhkhaimkt"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-telegram-direct"
              className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 hover:scale-[1.01] transition-all cursor-pointer text-sm sm:text-base"
            >
              <Send className="h-4 w-4" />
              <span>Telegram: @minhkhaimkt</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

