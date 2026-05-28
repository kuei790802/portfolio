import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kuei790802.github.io/portfolio"),
  title: {
    default: "歸維邦 Josh Kuei｜PM / BA Portfolio",
    template: "%s｜歸維邦 Josh Kuei",
  },
  description:
    "Operations-driven PM / BA · 9 年通路與跨部門協調經驗，搭配 AI 協作工作流交付數位專案。",
  openGraph: {
    type: "website",
    siteName: "歸維邦 Josh Kuei｜PM / BA Portfolio",
    locale: "zh_TW",
    title: "歸維邦 Josh Kuei｜PM / BA Portfolio",
    description:
      "Operations-driven PM / BA · 9 年通路與跨部門協調經驗，搭配 AI 協作工作流交付數位專案。",
  },
  twitter: {
    card: "summary_large_image",
    title: "歸維邦 Josh Kuei｜PM / BA Portfolio",
    description:
      "Operations-driven PM / BA · 9 年通路與跨部門協調經驗，搭配 AI 協作工作流交付數位專案。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
