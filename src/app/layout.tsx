import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ktech Việt Nam",
    template: "%s | Ktech Việt Nam",
  },
  description:
    "Ktech Việt Nam researches, engineers, manufactures and integrates technical solutions for enterprise and industrial operations.",
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
