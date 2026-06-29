import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ktech Việt Nam",
    template: "%s | Ktech Việt Nam",
  },
  description:
    "Technical foundation for the bilingual Ktech Việt Nam corporate website.",
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
