import React from 'react';
import { motion } from 'motion/react';
import { Check, Zap, Flame, Award, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onOpenConsultation: () => void;
}

export default function PricingSection({ onOpenConsultation }: PricingSectionProps) {
  const plans = [
    {
      id: "plan-1yr",
      name: "Gói Trải Nghiệm",
      duration: "1 Năm",
      price: "6.000.000đ",
      originalPrice: "8.000.000đ",
      desc: "Phù hợp cho cá nhân, môi giới bất động sản mới bắt đầu số hóa quy trình tìm kiếm khách hàng.",
      badge: null,
      features: [
        "Sử dụng đầy đủ mọi tính năng",
        "Tiết kiệm chi phí vận hành hơn thuê CTV",
        "Cập nhật phiên bản tự động miễn phí",
        "Hỗ trợ cài đặt trên 1 thiết bị máy tính",
        "Tài liệu và video hướng dẫn chi tiết",
        "Hỗ trợ Support kỹ thuật qua Zalo/UltraView"
      ],
      ctaText: "Đăng Ký Gói 1 Năm",
      popular: false,
      colors: {
        bg: "bg-white",
        border: "border-slate-200/80",
        text: "text-slate-900",
        btn: "bg-slate-950 hover:bg-slate-800 text-white shadow-md",
        iconContainer: "bg-slate-100 text-slate-700"
      }
    },
    {
      id: "plan-5yr",
      name: "Gói Chuyên Nghiệp",
      duration: "5 Năm",
      price: "14.000.000đ",
      originalPrice: "30.000.000đ",
      desc: "Giải pháp hoàn hảo nhất cho các Best-Seller & văn phòng BĐS muốn khẳng định thương hiệu lâu dài.",
      badge: "Được Lựa Chọn Nhiều Nhất",
      features: [
        "Sử dụng đầy đủ mọi tính năng độc quyền",
        "Tiết kiệm tới 60% so với gói 1 năm",
        "Cập nhật nâng cấp API tự động miễn phí",
        "Hỗ trợ cài đặt & tối ưu trên nhiều máy tính",
        "Ưu tiên hỗ trợ kỹ thuật VIP 24/7",
        "Tặng kèm bộ tài liệu kịch bản chốt sale BĐS",
        "Tặng zoom thiết lập quy trình nuôi nick cá nhân"
      ],
      ctaText: "Đăng Ký Gói 5 Năm",
      popular: true,
      colors: {
        bg: "bg-white relative shadow-2xl shadow-blue-500/10",
        border: "border-brand-vibrant ring-2 ring-brand-vibrant/20",
        text: "text-slate-900",
        btn: "bg-brand-vibrant hover:bg-brand-primary text-white shadow-lg shadow-blue-500/20",
        iconContainer: "bg-[#004e9f]/10 text-[#004e9f]"
      }
    },
    {
      id: "plan-10yr",
      name: "Gói Doanh Nghiệp (VIP)",
      duration: "10 Năm",
      price: "24.000.000đ",
      originalPrice: "60.000.000đ",
      desc: "Dành riêng cho các Sàn Giao Dịch BĐS hoặc Đội Nhóm lớn muốn bứt phá doanh số vượt bậc.",
      badge: "Siêu Tiết Kiệm (Hot)",
      features: [
        "Đầy đủ mọi tính năng & giải pháp MKT cao cấp nhất",
        "Chi phí cực rẻ chỉ tương đương 200k/tháng",
        "Bảo hành kỹ thuật suốt thời gian sử dụng",
        "Chuyển đổi thiết bị linh hoạt trọn đời",
        "Training trực tiếp 1-1 cho cả đội nhóm/sàn BĐS",
        "Tư vấn lộ trình xây dựng data 10.000 khách hàng",
        "Nâng cấp tính năng độc quyền theo yêu cầu riêng"
      ],
      ctaText: "Đăng Ký Gói VIP 10 Năm",
      popular: false,
      colors: {
        bg: "bg-slate-950 text-white relative overflow-hidden",
        border: "border-slate-800",
        text: "text-white",
        btn: "bg-brand-accent hover:bg-orange-600 text-slate-950 font-bold shadow-lg shadow-brand-accent/20",
        iconContainer: "bg-white/10 text-brand-accent"
      }
    }
  ];

  return (
    <section id="bang-gia" className="py-24 bg-slate-50 relative overflow-hidden border-t border-b border-slate-100">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-50/50 blur-3xl pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Title */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold text-brand-vibrant uppercase tracking-widest block bg-blue-50 px-3 py-1.5 rounded-full w-max mx-auto border border-blue-100 shadow-xs">
            BẢNG GIÁ ĐẶT LỊCH ĐĂNG BÀI
          </span>
          <h2 className="text-3xl sm:text-4.5xl font-extrabold text-slate-900 tracking-tight leading-tight select-none">
            Chi Phí Đầu Tư Để <span className="text-brand-vibrant">Bứt Phá</span> Doanh Số
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Chúng tôi cam kết mang lại giải pháp chất lượng nhất với mức chi phí tiết kiệm tối đa. 
            Không cần đóng phí tháng, không lo chi phí ẩn phát sinh.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              id={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`rounded-3xl border ${plan.colors.border} ${plan.colors.bg} p-6 sm:p-8 flex flex-col justify-between relative group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1`}
            >
              {/* Optional Badges */}
              {plan.badge && (
                <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-extrabold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md text-white select-none ${plan.popular ? 'bg-brand-accent' : 'bg-brand-vibrant'}`}>
                  {plan.badge}
                </span>
              )}

              {/* Decorative Background Glows for Elite VIP card */}
              {plan.id === 'plan-10yr' && (
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-brand-accent/10 blur-2xl pointer-events-none" />
              )}

              {/* Header Info */}
              <div className="space-y-6 text-left">
                <div className="flex justify-between items-start gap-4">
                  <div className="space-y-1">
                    <h3 className={`text-lg font-extrabold tracking-tight ${plan.id === 'plan-10yr' ? 'text-white' : 'text-slate-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs ${plan.id === 'plan-10yr' ? 'text-slate-400' : 'text-slate-500'} font-medium`}>
                      Duy trì trong <span className="font-bold underline">{plan.duration}</span>
                    </p>
                  </div>
                  <div className={`h-10 w-10 rounded-xl ${plan.colors.iconContainer} flex items-center justify-center shrink-0`}>
                    {plan.id === 'plan-1yr' && <Zap className="h-5 w-5" />}
                    {plan.id === 'plan-5yr' && <Flame className="h-5 w-5 fill-brand-accent text-brand-accent border-0" />}
                    {plan.id === 'plan-10yr' && <Award className="h-5 w-5" />}
                  </div>
                </div>

                {/* Pricing Block */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-vibrant font-mono">
                      {plan.price}
                    </span>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed ${plan.id === 'plan-10yr' ? 'text-slate-300' : 'text-slate-600'} border-b border-dashed pb-5 ${plan.id === 'plan-10yr' ? 'border-slate-800' : 'border-slate-100'}`}>
                  {plan.desc}
                </p>

                {/* Feature checklist */}
                <ul className="space-y-3 pt-1">
                  {plan.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start gap-2.5">
                      <span className={`h-4.5 w-4.5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.id === 'plan-10yr' ? 'bg-slate-800 text-brand-accent' : 'bg-blue-50 text-brand-vibrant'}`}>
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span className={`text-[12.5px] leading-snug ${plan.id === 'plan-10yr' ? 'text-slate-300' : 'text-slate-600'} font-medium`}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Trigger Button */}
              <div className="pt-8 mt-auto">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer ${plan.colors.btn}`}
                >
                  <span>{plan.ctaText}</span>
                </button>
                <div className="text-center mt-2.5">
                  <span className={`text-[10px] ${plan.id === 'plan-10yr' ? 'text-slate-500' : 'text-slate-400'} flex items-center justify-center gap-1`}>
                    Dùng thử 100% miễn phí • Không rủi ro
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust factors */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 sm:gap-12 p-5 rounded-2xl bg-white border border-slate-100 shadow-xs max-w-4xl mx-auto">
          <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Vận hành ổn định & cập nhật trọn đời
          </div>
          <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Tặng kèm trọn bộ kịch bản chốt khách
          </div>
          <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Support chuyên viên kĩ thuật tận tâm
          </div>
        </div>
      </div>
    </section>
  );
}
