import { PainPoint, Pillar, SetupStep, Metric, KeyBenefit, FAQItem } from './types';

export const PAIN_POINTS: PainPoint[] = [
  {
    id: "pain-1",
    title: "Tốn quá nhiều thời gian",
    description: "Việc đăng thủ công nick và đăng bài vào hàng chục nhóm mỗi ngày tiêu tốn của bạn từ 3–4 tiếng đồng hồ, làm giảm thời gian tập trung tư vấn chốt đơn.",
    iconName: "clock"
  },
  {
    id: "pain-2",
    title: "Dễ bị đánh dấu Spam",
    description: "Tần suất thao tác quá nhanh và nội dung lặp đi lặp lại không được tối ưu khiến tài khoản Facebook của bạn dễ bị checkpoint, khóa hoặc hạn chế tính năng.",
    iconName: "ban"
  },
  {
    id: "pain-3",
    title: "Không có tương tác",
    description: "Không thể tiếp cận đúng tệp khách hàng tiềm năng, đăng bài tràn lan dẫn đến lãng phí công sức vào những hội nhóm rác hoặc không đúng nhu cầu.",
    iconName: "userMinus"
  }
];

export const PILLARS: Pillar[] = [
  {
    id: "pillar-1",
    name: "MKT Care",
    subtitle: "Hệ thống nuôi nick và đăng bài tự động quy mông lớn. Tăng cường hiệu quả nhận diện thương hiệu tức thì.",
    badge: "Trụ cột 01",
    description: "Giải pháp nuôi tài khoản số lượng lớn chuyên nghiệp như người thật. Đăng bài lên nhóm, chăm sóc tài khoản hoàn toàn tự động.",
    features: [
      "Tự động đăng bài viết quảng cáo vào hàng nghìn nhóm",
      "Seeding bài viết tự động để tạo hiệu ứng đám đông thu hút",
      "Tương tác tài khoản tự động (like, share, lướt newsfeed) như người thật"
    ],
    theme: "blue"
  },
  {
    id: "pillar-2",
    name: "MKT UID",
    subtitle: "Công cụ khai thác dữ liệu khách hàng chất lượng cao từ đối thủ cạnh tranh và các hội nhóm mục tiêu.",
    badge: "Trụ cột 02",
    description: "Quét thông tin khách hàng tiềm năng công khai, giúp bạn thấu hiểu insight và có danh sách chất lượng để tiếp cận trực tiếp.",
    features: [
      "Quét thành viên nhóm, người tương tác fanpage nhanh chóng",
      "Lấy danh sách khách hàng tương tác trực tiếp từ đối thủ bản xứ",
      "Phân tích hành vi, bài viết tương tác cao của tệp khách hàng"
    ],
    theme: "light"
  }
];

export const SETUP_STEPS: SetupStep[] = [
  {
    stepNumber: "01",
    title: "Tư Vấn",
    description: "Khảo sát nhu cầu thực tế và xác định mục tiêu của khách hàng."
  },
  {
    stepNumber: "02",
    title: "Cài đặt",
    description: "Tiến hành cài đặt và kích hoạt bản quyền phần mềm trên máy tính."
  },
  {
    stepNumber: "03",
    title: "Chuẩn bị nick",
    description: "Nhập tệp nick vệ tinh và cấu hình ban đầu vào hệ thống nuôi."
  },
  {
    stepNumber: "04",
    title: "Quét data",
    description: "Tìm kiếm nhóm tiềm năng và quét tệp khách hàng mục tiêu."
  },
  {
    stepNumber: "05",
    title: "Soạn nội dung",
    description: "Tối ưu hóa các mẫu bài đăng quảng cáo cuốn hút, chống spam."
  },
  {
    stepNumber: "06",
    title: "Cấu hình",
    description: "Thiết lập các thông số giãn cách chạy tương tác an toàn ngủ nghỉ."
  },
  {
    stepNumber: "07",
    title: "Vận hành",
    description: "Đặt lịch và kích hoạt phần mềm tự động hóa theo thời gian mong muốn."
  },
  {
    stepNumber: "08",
    title: "Báo cáo",
    description: "Đo lường hiệu quả quảng bá hàng ngày để liên tục tinh chỉnh."
  }
];

export const METRICS: Metric[] = [
  {
    value: "20,000+",
    label: "Người dùng tin tưởng",
    subLabel: "Đã và đang sử dụng hiệu quả cho đa dạng lĩnh vực, đặc biệt là Bất động sản."
  },
  {
    value: "10X",
    label: "Tỷ lệ chuyển đổi",
    subLabel: "Tăng khả năng tiếp cận và kết nối tệp khách hàng tiềm năng thật sự có nhu cầu."
  },
  {
    value: "90%",
    label: "Tiết kiệm thời gian",
    subLabel: "Tự động hóa hoàn toàn các thao tác thủ công lặp đi lặp lại nhàm chán hàng ngày."
  }
];

export const KEY_BENEFITS: KeyBenefit[] = [
  {
    id: "benefit-1",
    title: "Hỗ trợ 24/7",
    description: "Luôn sẵn sàng đồng hành, xử lý kỹ thuật cùng khách hàng mọi lúc.",
    iconName: "headset"
  },
  {
    id: "benefit-2",
    title: "Cập nhật liên tục",
    description: "Phần mềm luôn cập nhật các tính năng mới nhất theo thuật toán Facebook.",
    iconName: "refresh"
  },
  {
    id: "benefit-3",
    title: "An toàn tuyệt đối",
    description: "Bảo mật thông tin tài khoản và dữ liệu khách hàng tuyệt đối.",
    iconName: "shield"
  },
  {
    id: "benefit-4",
    title: "Tốc độ xử lý",
    description: "Hệ thống vận hành nhanh chóng, mượt mà và tối ưu hóa tài nguyên.",
    iconName: "zap"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Phần mềm Minh Khải MKT có khó sử dụng không?",
    answer: "Hoàn toàn không khó. Phần mềm được thiết kế với giao diện tiếng Việt trực quan, thân thiện. Khi mua, đội ngũ kỹ thuật của Minh Khải MKT sẽ cài đặt và hướng dẫn chi tiết 1-1 qua UltraView hoặc Zalo Call, hỗ trợ bạn cho đến khi làm chủ phần mềm và tự động hóa được quy trình của mình."
  },
  {
    id: "faq-2",
    question: "Sử dụng có bị khóa nick hay die tài khoản Facebook không?",
    answer: "Phần mềm Minh Khải MKT tích hợp cơ chế mô phỏng hành động thực tế của con người (human-like behavior) cùng các tính năng đổi IP chuyên nghiệp như Proxy, Dcom và tùy chỉnh độ trễ (delay) linh hoạt giữa các lần đăng. Điều này giúp tài khoản của bạn hoạt động tự nhiên, an toàn cực cao, tránh được hệ thống phát hiện spam của Facebook."
  },
  {
    id: "faq-3",
    question: "Chi phí duy trì phần mềm như thế nào?",
    answer: "Chúng tôi mang đến các gói dịch vụ cực kỳ đa dạng theo năm, phù hợp với nhu cầu của cá nhân lẫn doanh nghiệp lớn. Chỉ đầu tư một chi phí rất nhỏ ban đầu, bạn đã có thể sở hữu nhân sự ảo làm việc 24/24, tiết kiệm hàng triệu đồng tiền quảng cáo Facebook Ads truyền thống hàng tháng."
  }
];
