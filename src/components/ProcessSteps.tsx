import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SETUP_STEPS } from '../data';
import { HelpCircle, ChevronRight, BookmarkCheck } from 'lucide-react';

export default function ProcessSteps() {
  const [selectedStep, setSelectedStep] = useState<string | null>("01");
  const [activeVideo, setActiveVideo] = useState<'v1' | 'v2'>('v1');

  // Specific actionable tips corresponding to each step
  const stepTips: Record<string, string> = {
    "01": "Mẹo: Hãy liệt kê sẵn khu vực cần bán (quận/huyện) và phân khúc giá để định hướng nhóm chuẩn mục tiêu.",
    "02": "Mẹo: Kỹ thuật viên sẽ hỗ trợ cài đặt qua UltraView từ xa, bạn chỉ cần mở máy tính chạy Windows là được.",
    "03": "Mẹo: Nên mua các nick Facebook đã tạo trên 1 năm để có độ tin cậy và sức bền cao khi quảng cáo.",
    "04": "Mẹo: Quét thành viên từ các fanpage của chính đối thủ đang tự chạy ads để có tệp khách đang phát sinh nhu cầu.",
    "05": "Mẹo: Luôn sử dụng cú pháp spin nội dung {Xin chào|Hello} để lách bộ lọc trùng lặp của Facebook.",
    "06": "Mẹo: Nên đặt thời gian chờ tối thiểu 180-300 giây giữa các lần đăng bài để đảm bảo tối ưu hóa an toàn.",
    "07": "Mẹo: Đặt lịch chạy giờ vàng (8-9h, 11-12h, 19-21h) là lúc khách hàng online nhiều nhất để hiển thị dẫn đầu.",
    "08": "Mẹo: Theo dõi số lượng like/inbox nhận được từ từng nhóm để giữ lại các nhóm chất lượng cao nhất."
  };

  return (
    <section id="quy-trinh" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Quy Trình Chuyển Giao</span>
          <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight leading-tight">
            Quy trình triển khai 8 bước
          </h2>
          <div className="w-16 h-1.5 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Hỗ trợ tận tình và chuyển giao từng bước một giúp bạn và đội ngũ nhanh chóng nắm vững và làm chủ hệ thống marketing tự động.
          </p>
        </div>

        {/* 8 Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SETUP_STEPS.map((step, idx) => {
            const isSelected = selectedStep === step.stepNumber;
            return (
              <motion.div
                key={step.stepNumber}
                id={`step-card-${step.stepNumber}`}
                onClick={() => setSelectedStep(step.stepNumber)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-6 bg-white rounded-2xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[140px] group ${isSelected ? 'border-brand-vibrant ring-2 ring-brand-vibrant/10 shadow-md' : 'border-slate-100 hover:border-slate-200 hover:shadow-sm'}`}
              >
                {/* Large Background Ghost number */}
                <span className={`absolute -right-2 -bottom-2 text-7xl font-bold pointer-events-none transition-colors select-none ${isSelected ? 'text-brand-vibrant/10 font-extrabold' : 'text-slate-100 group-hover:text-slate-200'}`}>
                  {step.stepNumber}
                </span>

                <div className="space-y-2 relative z-10">
                  <h3 className="font-bold text-base sm:text-lg text-slate-950 flex items-center gap-2 group-hover:text-brand-vibrant transition-colors">
                    <span className={`inline-flex items-center justify-center text-xs font-mono h-5 w-5 rounded-full ${isSelected ? 'bg-brand-vibrant text-white' : 'bg-slate-100 text-slate-500'}`}>
                      {step.stepNumber}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed pr-2">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <span>Xem Chi Tiết</span>
                  <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Actionable Pro Tips Drawer based on selection */}
        {selectedStep && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 bg-white border border-brand-vibrant/20 rounded-2xl p-5 max-w-3xl mx-auto shadow-sm flex items-start gap-4"
          >
            <div className="h-10 w-10 shrink-0 rounded-xl bg-blue-50 text-brand-vibrant flex items-center justify-center font-bold">
              {selectedStep}
            </div>
            <div className="space-y-1 text-left">
              <h4 className="text-xs font-bold text-brand-vibrant uppercase tracking-wider">
                Hướng dẫn thực chiến cho Bước {selectedStep}: {SETUP_STEPS.find(s => s.stepNumber === selectedStep)?.title}
              </h4>
              <p className="text-sm font-medium text-slate-700">
                {stepTips[selectedStep]}
              </p>
            </div>
          </motion.div>
        )}

        {/* Beautiful YouTube Demonstration Embed Section */}
        <div className="mt-20 pt-12 border-t border-slate-200/60 max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-1.5 mx-auto">
              <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <div className="w-2 h-2 rounded-full bg-red-600 absolute" />
              <span className="text-xs font-bold text-red-600 tracking-wide uppercase pl-3">
                Video Demo Thực Tế
              </span>
            </div>
            <h3 className="text-xl sm:text-2.5xl font-bold text-slate-900 tracking-tight">
              Xem Trình Diễn Dự Án Trực Tiếp
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              Trực quan hóa hoạt động thực tế của phần mềm MKT. Khám phá cách thức hệ thống tự động hóa đăng tin hàng loạt và khai thác tệp khách hàng tiềm năng.
            </p>
          </div>

          {/* Interactive Video Tabs Trigger */}
          <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto bg-slate-100 p-1.5 rounded-2xl border border-slate-200/60">
            <button
              onClick={() => setActiveVideo('v1')}
              className={`flex-1 text-xs font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer ${
                activeVideo === 'v1'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              🎬 Bản Demo Mới Nhất
            </button>
            <button
              onClick={() => setActiveVideo('v2')}
              className={`flex-1 text-xs font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer ${
                activeVideo === 'v2'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              🔥 Hướng Dẫn Vận Hành
            </button>
          </div>

          {/* Combined Direct Player & Information Hub */}
          <div className="relative max-w-3xl mx-auto">
            {/* Aspect responsive player iframe wrapping YouTube start timestamp */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black aspect-video border border-slate-200 shadow-2xl shadow-blue-900/10">
              <iframe
                id="youtube-video-player"
                src={activeVideo === 'v1' ? 'https://www.youtube.com/embed/3aHT7IbD1dk?enablejsapi=1' : 'https://www.youtube.com/embed/EKizwFtk4-Q?start=209&enablejsapi=1'}
                title="Minh Khải MKT - Video hướng dẫn vận hành chi tiết"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Instruction Tip Overlay Box below the iframe */}
            <div className="mt-4 bg-blue-50 border border-blue-100 rounded-2xl p-4 text-left shadow-xs">
              <div className="flex gap-3">
                <span className="text-lg">💡</span>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-brand-primary uppercase tracking-wide">
                    Mẹo hữu ích cho người quản trị video
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nếu anh muốn chuyển video phát trực tiếp mượt mà ngay trên web mà không gặp thông báo hạn chế của YouTube, anh chỉ cần vào <strong>YouTube Studio &gt; Nội dung &gt; Chi tiết Video &gt; Hiển thị thêm &gt; Tích chọn &quot;Cho phép nhúng&quot; (Allow embedding)</strong> là video sẽ phát trực tiếp cực mượt được luôn nhé!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom video highlight features checklist metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto pt-2">
            <div className="bg-white rounded-xl p-3 border border-slate-100 flex items-center gap-3">
              <span className="text-xl">🎬</span>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Trực quan sinh động</h4>
                <p className="text-[11px] text-slate-500">Xem trực tiếp quy trình thực tế</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-3 border border-slate-100 flex items-center gap-3">
              <span className="text-xl">🔥</span>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Cơ chế vận hành</h4>
                <p className="text-[11px] text-slate-500">Nuôi tài khoản & Spin content</p>
              </div>
            </div>
            <div className="bg-[#f0f9ff] rounded-xl p-3 border border-blue-100 flex items-center gap-3">
              <span className="text-xl">🛡️</span>
              <div>
                <h4 className="text-xs font-bold text-slate-800">An Toàn Tuyệt Đối</h4>
                <p className="text-[11px] text-slate-500">Tự động cấu hình giãn cách thông minh</p>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.youtube.com/watch?v=3aHT7IbD1dk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 px-5 py-2.5 rounded-xl shadow-xs"
            >
              <span>Xem trực tiếp Bản mới trên YouTube</span>
              <span className="text-red-600">▶</span>
            </a>
            <a
              href="https://www.youtube.com/watch?v=EKizwFtk4-Q&t=209s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-red-600 transition-colors bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 px-5 py-2.5 rounded-xl shadow-xs"
            >
              <span>Xem trực tiếp Demo 01 trên YouTube</span>
              <span className="text-red-600">▶</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
