import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Sol22.vercel.app",
  description: "Resources for the Solana Token22 Program & the Metaplex Protocol that allow you to create and manage your tokens on the Solana blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex-col "
      style={{
        fontFamily: "Arial",
        margin: 0,
        padding: 0,
        background: "#111111 url(page/bgr.png) no-repeat center center / cover",
        // marginLeft: "5%",
      }}
      >
        {children}
        <Analytics mode="production" />
        </body>
    </html>
  );
}
