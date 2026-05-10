import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrueCare - Chăm sóc xe đúng lúc, ở nơi đáng tin",
  description:
    "TrueCare giúp chủ xe tìm tiệm rửa xe ô tô uy tín gần mình, đặt lịch rửa xe, giữ chỗ trong 30 phút và theo dõi chất lượng bằng hình ảnh thực tế.",
  keywords: [
    "rửa xe ô tô gần đây",
    "đặt lịch rửa xe",
    "tiệm rửa xe uy tín",
    "chăm sóc xe ô tô",
    "car spa gần tôi",
    "rửa xe không cần chờ lâu",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
