export type MediaFormat = "webp" | "avif";

export type CapabilityKey =
  | "aiEnterprise"
  | "automationSpecialMachinery"
  | "precisionCnc"
  | "automotiveSupport"
  | "technicalChemicals";

export type ResponsiveImage = {
  id: string;
  source: string;
  basePath: string;
  formats: readonly MediaFormat[];
  widths: readonly number[];
  aspectRatio: string;
  alt: {
    vi: string;
    en: string;
  };
};

export type CapabilityMedia = ResponsiveImage & {
  capabilityKey: CapabilityKey;
};

export const brandMedia = {
  logo: {
    id: "logo-ktech",
    source: "assets/source-approved/logo.jpg",
    path: "/images/brand/logo-ktech.jpg",
    width: 1896,
    height: 1016,
    alt: {
      vi: "Logo Ktech Việt Nam",
      en: "Ktech Việt Nam logo",
    },
  },
} as const;

export const heroMedia = {
  id: "hero-industrial-intelligence-v1",
  source: "assets/source-approved/Hero.png",
  basePath: "/images/hero/hero-industrial-intelligence-v1",
  formats: ["webp", "avif"],
  widths: [768, 1280],
  aspectRatio: "1672 / 941",
  alt: {
    vi: "Minh họa nền tảng trí tuệ công nghiệp",
    en: "Industrial intelligence foundation visual",
  },
} as const satisfies ResponsiveImage;

export const capabilityMedia = [
  {
    id: "capability-ai-enterprise-v1",
    capabilityKey: "aiEnterprise",
    source: "assets/source-approved/1.png",
    basePath: "/images/capabilities/capability-ai-enterprise-v1",
    formats: ["webp", "avif"],
    widths: [480, 768, 1200],
    aspectRatio: "4 / 3",
    alt: {
      vi: "Minh họa năng lực AI doanh nghiệp",
      en: "Enterprise AI capability visual",
    },
  },
  {
    id: "capability-automation-special-machinery-v1",
    capabilityKey: "automationSpecialMachinery",
    source: "assets/source-approved/2.png",
    basePath: "/images/capabilities/capability-automation-special-machinery-v1",
    formats: ["webp", "avif"],
    widths: [480, 768, 1200],
    aspectRatio: "4 / 3",
    alt: {
      vi: "Minh họa năng lực tự động hóa và máy chuyên dụng",
      en: "Automation and special machinery capability visual",
    },
  },
  {
    id: "capability-precision-cnc-v1",
    capabilityKey: "precisionCnc",
    source: "assets/source-approved/3.png",
    basePath: "/images/capabilities/capability-precision-cnc-v1",
    formats: ["webp", "avif"],
    widths: [480, 768, 1200],
    aspectRatio: "4 / 3",
    alt: {
      vi: "Minh họa năng lực gia công CNC chính xác",
      en: "Precision CNC capability visual",
    },
  },
  {
    id: "capability-automotive-support-v1",
    capabilityKey: "automotiveSupport",
    source: "assets/source-approved/4.png",
    basePath: "/images/capabilities/capability-automotive-support-v1",
    formats: ["webp", "avif"],
    widths: [480, 768, 1200],
    aspectRatio: "4 / 3",
    alt: {
      vi: "Minh họa năng lực hỗ trợ ngành ô tô",
      en: "Automotive support capability visual",
    },
  },
  {
    id: "capability-technical-chemicals-v1",
    capabilityKey: "technicalChemicals",
    source: "assets/source-approved/5.png",
    basePath: "/images/capabilities/capability-technical-chemicals-v1",
    formats: ["webp", "avif"],
    widths: [480, 768, 1200],
    aspectRatio: "4 / 3",
    alt: {
      vi: "Minh họa năng lực hóa chất kỹ thuật",
      en: "Technical chemicals capability visual",
    },
  },
] as const satisfies readonly CapabilityMedia[];
