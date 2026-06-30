import type { Metadata, Viewport } from "next";
import { company } from "@/content/company";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(company.canonicalDomain),
  applicationName: company.brandName,
  title: {
    default: company.brandName,
    template: `%s | ${company.brandName}`,
  },
  description:
    "Ktech Việt Nam researches, engineers, manufactures and integrates technical solutions for enterprise and industrial operations.",
};

export const viewport: Viewport = {
  themeColor: "#071526",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
