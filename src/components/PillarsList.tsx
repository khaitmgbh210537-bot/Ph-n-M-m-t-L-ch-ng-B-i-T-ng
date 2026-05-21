import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ShieldCheck, Database, Calendar, Play, Search, Users, FileSpreadsheet } from 'lucide-react';
import { PILLARS } from '../data';

export default function PillarsList() {
  const [activeSimulation, setActiveSimulation] = useState<'none' | 'care' | 'uid'>('none');
  const [careSchedulerDate, setCareSchedulerDate] = useState('12:00');
  const [careGroupsCount, setCareGroupsCount] = useState(150);
  const [simulatingCare, setSimulatingCare] = useState(false);
  const [careProgress, setCareProgress] = useState(0);
  const [careLogs, setCareLogs] = useState<string[]>([]);

  const [uidTarget, setUidTarget] = useState('https://facebook.com/groups/batdongsanhaiphong');
  const [simulatingUid, setSimulatingUid] = useState(false);
  const [uidCount, setUidCount] = useState(0);
  const [scannedUsers, setScannedUsers] = useState<Array<{ id: string; name: string; position: string }>>([]);

  const handleStartCareSim = () => {
    if (simulatingCare) return;
    setSimulatingCare(true);
    setCareProgress(0);
    setCareLogs(["[Hệ thống] Đang kiểm tra 120 tài khoản vệ tinh...", "[Hệ thống] Xoay vòng IP Proxy thành công."]);

    const interval = setInterval(() => {
      setCareProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSimulatingCare(false);
          setCareLogs((prevLogs) => [
            ...prevLogs,
            `[Hoàn tất] Đã đăng bài thành công lên ${careGroupsCount} nhóm mục tiêu!`,
            `[Thống kê] Tiếp cận ước tính: ~${(careGroupsCount * 450).toLocaleString()} khách hàng.`
          ]);
          return 100;
        }

        const nextProgress = prev + 25;
        if (nextProgress === 25) {
          setCareLogs((prevLogs) => [...prevLogs, `[Đang chạy] Bắt đầu tự động spin nội dung bài đăng...`]);
        } else if (nextProgress === 50) {
          setCareLogs((prevLogs) => [...prevLogs, `[Đang chạy] Tiến trình đăng bài: 45/${careGroupsCount} hội nhóm...`]);
        } else if (nextProgress === 75) {
          setCareLogs((prevLogs) => [...prevLogs, `[Đang chạy] Tự động thả tim và seeding 3 bình luận mồi chày...`]);
        }
        return nextProgress;
      });
    }, 1000);
  };

  const handleStartUidSim = () => {
    if (simulatingUid) return;
    setSimulatingUid(true);
    setUidCount(0);
    setScannedUsers([]);

    const mockNames = [
      { id: "100084534", name: "Nguyễn Văn Hùng", position: "Nhà đầu tư Đất nền" },
      { id: "100023412", name: "Lê Thị Thu Thủy", position: "Môi giới chung cư cao cấp" },
      { id: "100095811", name: "Trần Minh Hoàng", position: "Tìm mua biệt thự nghỉ dưỡng" },
      { id: "100030129", name: "Phạm Quốc Bảo", position: "Quan tâm Shophouse tài chính" }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep >= mockNames.length) {
        clearInterval(interval);
        setSimulatingUid(false);
        return;
      }

      setScannedUsers((prev) => [...prev, mockNames[currentStep]]);
      setUidCount((prev) => prev + Math.floor(Math.random() * 80) + 120);
      currentStep++;
    }, 800);
  };

  return (
    <section id="tinh-nang" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Hệ Sinh Thái MKT</span>
          <h2 className="text-2xl sm:text-3.5xl font-bold text-slate-900 tracking-tight leading-tight">
            Giải Pháp Đăng Bài Tự Động
          </h2>
          <div className="w-16 h-1.5 bg-brand-accent mx-auto mt-4 rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed">
            Hệ sinh thái tự động hóa giúp bạn tối ưu chi phí, nâng cao diện phủ và dẫn đầu tệp khách hàng tiềm năng trong thị trường bất động sản khốc liệt.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* MKT Care Card */}
          <div className="bg-[#003875] text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-xl border border-blue-900 group">
            {/* Sparkle graphics in background */}
            <div className="absolute top-0 right-0 p-8 opacity-20 -z-5">
              <span className="text-6xl">✨</span>
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              <span className="self-start text-[11px] font-bold tracking-widest uppercase bg-blue-800 text-blue-200 px-3 py-1.5 rounded-lg border border-blue-700/50">
                {PILLARS[0].badge}
              </span>
              
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3.5xl font-bold tracking-tight text-white flex items-center gap-3">
                  {PILLARS[0].name}
                  <span className="text-xs text-brand-accent bg-orange-500/10 border border-orange-500/20 px-2 py-0.5 rounded-md font-mono">NUÔI & SỬA TIN</span>
                </h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                  {PILLARS[0].subtitle}
                </p>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3 pt-2">
                {PILLARS[0].features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0 mt-0.5" />
                    <span className="text-slate-100 text-[15px]">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Simulation triggers */}
              <div className="pt-4 border-t border-blue-800/60 mt-2 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-blue-200">Trải nghiệm tương tác nhanh:</span>
                  <button
                    id="btn-care-sim-toggle"
                    onClick={() => setActiveSimulation(activeSimulation === 'care' ? 'none' : 'care')}
                    className="text-xs font-bold text-brand-accent hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {activeSimulation === 'care' ? "Đóng trình chạy" : "Thử lập lịch đăng bài"}
                  </button>
                </div>

                <AnimatePresence>
                  {activeSimulation === 'care' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-[#002f63] border border-blue-800 rounded-2xl p-4 space-y-4 text-slate-200 overflow-hidden"
                    >
                      <h4 className="text-xs font-bold uppercase text-brand-accent tracking-wider flex items-center gap-1.5">
                        <Calendar className="h-4.5 w-4.5" /> Bảng lập lịch đăng bài MKT Care
                      </h4>
                      
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="space-y-1">
                          <label className="text-[10px] text-blue-300 font-bold uppercase">Giờ chạy tự động</label>
                          <input
                            type="time"
                            value={careSchedulerDate}
                            onChange={(e) => setCareSchedulerDate(e.target.value)}
                            className="w-full bg-blue-950 border border-blue-800 rounded-lg px-2.5 py-2 text-white font-mono"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-blue-300 font-bold uppercase">Nhóm mục tiêu</label>
                          <input
                            type="number"
                            value={careGroupsCount}
                            onChange={(e) => setCareGroupsCount(Math.max(1, parseInt(e.target.value) || 1))}
                            className="w-full bg-blue-950 border border-blue-800 rounded-lg px-2.5 py-2 text-white font-mono"
                          />
                        </div>
                      </div>

                      {/* Run Simulation */}
                      <button
                        onClick={handleStartCareSim}
                        disabled={simulatingCare}
                        className={`w-full py-2.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${simulatingCare ? 'bg-blue-900 text-blue-300' : 'bg-brand-accent hover:bg-orange-500 text-slate-900 shadow-md'}`}
                      >
                        <Play className="h-4 w-4" />
                        <span>{simulatingCare ? `Đang đăng bài (${careProgress}%)` : `Kích Hoạt Auto Post (${careSchedulerDate})`}</span>
                      </button>

                      {/* Simulation Progress & Logs */}
                      {careLogs.length > 0 && (
                        <div className="bg-black/40 rounded-xl p-3 font-mono text-[11px] text-emerald-400 space-y-1.5 border border-blue-950">
                          {careLogs.map((log, lIdx) => (
                            <div key={lIdx} className="leading-relaxed">{log}</div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

          {/* MKT UID Card */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-lg group">
            {/* Database graphic in background */}
            <div className="absolute top-0 right-0 p-8 text-blue-100 opacity-60 -z-3">
              <Database className="h-32 w-32 stroke-[0.5]" />
            </div>

            <div className="flex flex-col gap-6 relative z-10">
              <span className="self-start text-[11px] font-bold tracking-widest uppercase bg-slate-200 text-slate-600 px-3 py-1.5 rounded-lg border border-slate-300/50">
                {PILLARS[1].badge}
              </span>
              
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3.5xl font-bold tracking-tight text-slate-950 flex items-center gap-3">
                  {PILLARS[1].name}
                  <span className="text-xs text-brand-vibrant bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md font-mono">QUÉT TỆP KHÁCH</span>
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {PILLARS[1].subtitle}
                </p>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3 pt-2">
                {PILLARS[1].features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-vibrant shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-[15px]">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Simulation triggers */}
              <div className="pt-4 border-t border-slate-200/80 mt-2 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-500">Trải nghiệm tương tác nhanh:</span>
                  <button
                    id="btn-uid-sim-toggle"
                    onClick={() => setActiveSimulation(activeSimulation === 'uid' ? 'none' : 'uid')}
                    className="text-xs font-bold text-brand-vibrant hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {activeSimulation === 'uid' ? "Đóng trình quét" : "Thử quét khách hàng"}
                  </button>
                </div>

                <AnimatePresence>
                  {activeSimulation === 'uid' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-white border border-slate-200 rounded-2xl p-4 space-y-4 text-slate-700 overflow-hidden shadow-xs"
                    >
                      <h4 className="text-xs font-bold uppercase text-brand-vibrant tracking-wider flex items-center gap-1.5 border-b border-slate-100 pb-2">
                        <Search className="h-4.5 w-4.5" /> Bộ quét thành viên nhóm MKT UID
                      </h4>

                      <div className="space-y-1.5 text-xs">
                        <label className="text-[10px] text-slate-400 font-bold uppercase">Nhập Link Nhóm/Fanpage Đối Thủ</label>
                        <input
                          type="text"
                          value={uidTarget}
                          onChange={(e) => setUidTarget(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 font-mono text-xs focus:ring-1 focus:ring-brand-vibrant focus:border-brand-vibrant outline-none"
                        />
                      </div>

                      <button
                        onClick={handleStartUidSim}
                        disabled={simulatingUid}
                        className={`w-full py-2.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${simulatingUid ? 'bg-slate-100 text-slate-400' : 'bg-brand-vibrant hover:bg-brand-primary text-white shadow-md'}`}
                      >
                        <Search className="h-4 w-4" />
                        <span>{simulatingUid ? "Đang xử lý kết nối nhóm..." : "Kéo Thành Viên Nhóm"}</span>
                      </button>

                      {/* Display scanned results table mock */}
                      {scannedUsers.length > 0 && (
                        <div className="space-y-2">
                          <div className="flex justify-between items-center text-[10px] text-slate-400 font-bold uppercase">
                            <span>Quét được: {uidCount} UID</span>
                            <span className="text-emerald-600 flex items-center gap-0.5"><ShieldCheck className="h-3 w-3" /> Thành công</span>
                          </div>
                          
                          <div className="border border-slate-100 rounded-lg overflow-hidden bg-slate-50 divide-y divide-slate-100">
                            {scannedUsers.map((user) => (
                              <div key={user.id} className="flex justify-between items-center p-2 text-xs">
                                <div className="flex items-center gap-2">
                                  <div className="h-6 w-6 rounded-full bg-brand-vibrant/10 text-brand-vibrant flex items-center justify-center font-bold text-[10px]">
                                    {user.name.charAt(0)}
                                  </div>
                                  <span className="font-medium text-slate-800">{user.name}</span>
                                </div>
                                <div className="text-right text-[10px] font-mono text-slate-500">
                                  {user.position}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
