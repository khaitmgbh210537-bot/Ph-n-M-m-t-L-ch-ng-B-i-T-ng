export interface PainPoint {
  id: string;
  title: string;
  description: string;
  iconName: "clock" | "ban" | "userMinus";
}

export interface Feature {
  text: string;
}

export interface Pillar {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  theme: 'blue' | 'light';
}

export interface SetupStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface Metric {
  value: string;
  label: string;
  subLabel: string;
}

export interface KeyBenefit {
  id: string;
  title: string;
  description: string;
  iconName: "headset" | "refresh" | "shield" | "zap";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ConsultationRequest {
  id: string;
  fullName: string;
  phoneNumber: string;
  socialLink: string; // Zalo/Telegram
  interest: "mkt-care" | "mkt-uid" | "both" | "consulting";
  createdAt: string;
  status: "pending" | "contacted" | "completed";
}
